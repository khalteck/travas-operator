package controller

import (
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"path/filepath"
	"strings"
	"time"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"github.com/travas-io/travas-op/model"
	"go.mongodb.org/mongo-driver/bson/primitive"
)


func (op *Operator) ProcessTourPackage() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		// Parse the incoming posted data from the client app
		if err := ctx.Request.ParseMultipartForm(10 << 20); err != nil {
			_ = ctx.AbortWithError(http.StatusBadRequest, gin.Error{Err: err})
		}

		// Get the store cookies in user session
		cookieData := sessions.Default(ctx)
		userInfo, ok := cookieData.Get("info").(model.UserInfo)
		if !ok {
			_ = ctx.AbortWithError(http.StatusBadRequest, errors.New("invalid user info"))
			return
		}

		// Get the uploaded images from the client app
		imageArr := make([]map[string]interface{}, 0)
		multiFile := ctx.Request.MultipartForm.File["tour_image"]

		// Check through the uploaded images. validate the filesize, format and append to a slice of a map
		for _, file := range multiFile {

			uploadFile, err := file.Open()
			if err != nil {
				_ = ctx.AbortWithError(http.StatusInternalServerError, gin.Error{Err: err})
				return
			}
			defer uploadFile.Close()

			fileByte, err := ioutil.ReadAll(uploadFile)
			if err != nil {
				_ = ctx.AbortWithError(http.StatusInternalServerError, errors.New("cannot upload images"))
				return
			}

			if len(fileByte) > 10<<20 {
				ctx.AbortWithError(http.StatusBadRequest, errors.New("image too large"))
				return
			}

			ext := filepath.Ext(file.Filename)
			if ext != ".png" && ext != ".jpg" && ext != ".jpeg" {
				ctx.AbortWithError(http.StatusBadRequest, errors.New("invalid image format"))
			}

			image := make(map[string]interface{})
			image["name"] = file.Filename
			image["size"] = fileByte
			imageArr = append(imageArr, image)

		}

		wte := ctx.Request.MultipartForm.Value["what_to_expect"]
		whatToExpect := make(map[string]string)
		for i, value := range wte {
			key := fmt.Sprintf("what_to_expect_%d", i)
			whatToExpect[key] = value

		}

		rules := ctx.Request.MultipartForm.Value["rules"]
		rulesMap := make(map[string]string)
		for i, value := range rules {
			key := fmt.Sprintf("rule_%d", i)
			rulesMap[key] = value
		}

		tour := &model.Tour{
			ID:              primitive.NewObjectID(),
			OperatorID:      userInfo.ID,
			Title:           ctx.PostForm("title"),
			Destination:     strings.TrimSpace(strings.ToLower(ctx.PostForm("destination"))),
			MeetingPoint:    ctx.PostForm("meeting_point"),
			StartTime:       ctx.PostForm("start_time"),
			StartDate:       ctx.PostForm("start_date"),
			EndDate:         ctx.PostForm("end_date"),
			Price:           ctx.PostForm("price"),
			Image:           imageArr,
			Contact:         ctx.PostForm("contact"),
			Language:        ctx.PostForm("language"),
			NumberOfTourist: ctx.PostForm("number_of_tourists"),
			Description:     ctx.PostForm("description"),
			WhatToExpect:    whatToExpect,
			Rules:           rulesMap,
			CreatedAt:       time.Now(),
			UpdatedAt:       time.Now(),
		}

		// Validate the Images Uploade field
		err := op.App.Validator.RegisterValidation("tour_image", ValidateImage)
		if err != nil {
			_ = ctx.AbortWithError(http.StatusBadRequest, gin.Error{Err: err})
			return
		}

		// Validate the input value with respect to their struct tags
		if err := op.App.Validator.Struct(&tour); err != nil {
			if _, ok := err.(*validator.InvalidValidationError); !ok {
				_ = ctx.AbortWithError(http.StatusBadRequest, gin.Error{Err: err})
				return
			}
		}

		cookieData.Set("tour_id", tour.ID)

		if err := cookieData.Save(); err != nil {
			_ = ctx.AbortWithError(http.StatusNotFound, gin.Error{Err: err})
			return
		}

		// insert the data into the database and check for error from the database
		_, err = op.DB.InsertPackage(tour)
		if err != nil {
			_ = ctx.AbortWithError(http.StatusBadRequest, gin.Error{Err: err})
			return
		}
		// send a successful response to the client app
		ctx.JSON(http.StatusCreated, gin.H{
			"message": "New package added successfully",
		})
	}
}

// LoadTourPackage: this will load all tour package created by the operator
func (op *Operator) LoadTourPackage() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		// Get the needed data from session cookies 
		cookieData := sessions.Default(ctx)
		userInfo, ok := cookieData.Get("info").(model.UserInfo)
		if !ok {
			_ = ctx.AbortWithError(http.StatusNotFound, errors.New("cannot find tour id"))
		}

		// get all the created tour package from the tour collection
		res, err := op.DB.LoadTours(userInfo.ID)
		if err != nil {
			_ = ctx.AbortWithError(http.StatusInternalServerError, gin.Error{Err: err})
			return
		}
		ctx.JSONP(http.StatusOK, gin.H{
			"tours":   res,
			"message": "success! loading tour packages",
		})
	}
}