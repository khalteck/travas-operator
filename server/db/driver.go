package db

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/travas-io/travas-op/internal/config"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var app config.Tools
// var uri = os.Getenv("TRAVAS_DB_URI")

func SetConnection(uri string) (*mongo.Client, error) {
	serverAPIOptions := options.ServerAPI(options.ServerAPIVersion1)

	ctx, cancelCtx := context.WithTimeout(context.Background(), 100*time.Second)
	defer cancelCtx()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri).SetServerAPIOptions(serverAPIOptions))
	if err != nil {
		app.ErrorLogger.Panicln(err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		app.ErrorLogger.Fatalln(err)
	}

	return client, nil
}

func OpenConnection() *mongo.Client {
	uri := os.Getenv("TRAVAS_DB_URI")
	fmt.Println(uri)

	count := 0
	for {
		client, err := SetConnection(uri)
		if err != nil {
			app.ErrorLogger.Println("Postgres not yet ready to connect ...")
			count++
		} else {
			app.InfoLogger.Println("Connecting to Postgres DB ...")
			return client
		}
		if count >= 10 {
			app.InfoLogger.Println(err)
			return nil
		}

		app.InfoLogger.Println("Trying to reconnect postgres database ...")
		time.Sleep(5 * time.Second)
		continue
	}
}
