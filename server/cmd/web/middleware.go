package main

import (
	"github.com/travas-io/travas-op/internal/pkg/token"
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
)

func Authorization() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		cookieData := sessions.Default(ctx)
		tokenString := cookieData.Get("token").(string)
		if tokenString == "" {
			_ = ctx.AbortWithError(http.StatusNoContent, errors.New("no value for token"))
			return
		}

		parse, err := token.Parse(tokenString)
		if err != nil {
			_ = ctx.AbortWithError(http.StatusUnauthorized, gin.Error{Err: err})
		}
		ctx.Set("pass", tokenString)
		ctx.Set("id", parse.ID)
		ctx.Set("email", parse.Email)
		ctx.Next()
	}
}
