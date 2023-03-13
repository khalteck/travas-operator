package upload

import (
	"errors"
	"fmt"
	"io/ioutil"
	"mime/multipart"

	"path/filepath"
)

var MEMORYMAXSIZE = 1024 * 1024

func SingleFile(form *multipart.Form, key string) (map[string]any, error) {
	imageInfo := make(map[string]any, 0)
	file, ok := form.File[key]
	if !ok {
		return nil, errors.New("cannot get upload file")
	}

	if file[0].Filename != "" {
		f, err := file[0].Open()
		if err != nil {
			return nil, err
		}

		defer func(f multipart.File) {
			err := f.Close()
			if err != nil {
				return
			}
		}(f)

		fileByte, err := ioutil.ReadAll(f)
		if err != nil {
			return nil, err

		}
		if len(fileByte) > MEMORYMAXSIZE {
			return nil, errors.New("file size too large")
		}
		ext := filepath.Ext(file[0].Filename)
		if ext != ".png" && ext != ".jpg" && ext != ".jpeg" {
			return nil, errors.New("invalid image format")
		}

		imageInfo["profile_data"] = fileByte
	}
	imageInfo["profile_image"] = file[0]
	return imageInfo, nil
}

// MultiFile : Check through the uploaded images. validate the filesize, format and append to a slice of a map
func MultiFile(form *multipart.Form, key string) (map[string][]any, error) {
	imageArr := make(map[string][]any, 0)

	file, ok := form.File[key]
	if !ok {
		return nil, errors.New("cannot get upload file")
	}

	for i, ff := range file {
		if ff.Filename != "" {
			f, err := ff.Open()
			if err != nil {
				return nil, err
			}

			defer func(f multipart.File) {
				err := f.Close()
				if err != nil {
					return
				}
			}(f)

			fileByte, err := ioutil.ReadAll(f)
			if err != nil {
				return nil, err
			}
			if len(fileByte) > MEMORYMAXSIZE {
				return nil, errors.New("file size too large")
			}

			ext := filepath.Ext(ff.Filename)
			if ext != ".png" && ext != ".jpg" && ext != ".jpeg" {
				return nil, errors.New("invalid image format")
			}

			bk := fmt.Sprintf("image_data_%d", i)
			img := fmt.Sprintf("tour_image_%d", i)
			imageArr[bk] = append(imageArr[bk], fileByte)
			imageArr[img] = append(imageArr[img], ff)

		}
	}
	return imageArr, nil
}
