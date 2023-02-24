package query

import (
	"context"
	"fmt"
	"time"

	"github.com/travas-io/travas-op/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// InsertPackage : this will help the operator to add new create tour packages in the
// tours collection with respect to a particular operators ID
func (op *OperatorDB) InsertPackage(id primitive.ObjectID, file []map[string]any) (primitive.ObjectID, bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	defer cancel()
	// filter := bson.D{{Key: "tour_image", Value: tour.Destination}, {Key: "operator_id", Value: tour.OperatorID}}

	filter := bson.D{{Key: "operator_id", Value: id}, {Key: "tour_image", Value: file}}
	var res bson.M
	err := TourData(op.DB, "tours").FindOne(ctx, filter).Decode(&res)
	if err != nil {
		if err == mongo.ErrNoDocuments {

			doc := bson.D{
				{Key: "operator_id", Value: id},
				{Key: "tour_image", Value: file},
			}

			insertRes, err := TourData(op.DB, "tours").InsertOne(ctx, doc)
			if err != nil {
				return primitive.NilObjectID, false, err
			}
			fmt.Println(insertRes)
			insertID := insertRes.InsertedID.(primitive.ObjectID)
			return insertID, true, nil
		}
		op.App.ErrorLogger.Fatalf("error while searching for data : %v ", err)
	}

	return res["_id"].(primitive.ObjectID), true, nil
}

func (op *OperatorDB) UpdatePackage(userID primitive.ObjectID, tour *model.Tour) (bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	defer cancel()

	filter := bson.D{{Key: "_id", Value: userID}}
	update := bson.D{{Key: "$set", Value: bson.D{
		{Key: "title", Value: tour.Title},
		{Key: "destination", Value: tour.Destination},
		{Key: "meeting_point", Value: tour.MeetingPoint},
		{Key: "start_time", Value: tour.StartTime},
		{Key: "start_date", Value: tour.StartDate},
		{Key: "end_date", Value: tour.EndDate},
		{Key: "price", Value: tour.Price},
		{Key: "contact", Value: tour.Contact},
		{Key: "language", Value: tour.Language},
		{Key: "number_of_tourist", Value: tour.NumberOfTourist},
		{Key: "description", Value: tour.Description},
		{Key: "what_to_expect", Value: tour.WhatToExpect},
		{Key: "rules", Value: tour.Rules},
		{Key: "created_at", Value: tour.CreatedAt},
		{Key: "updated_at", Value: tour.UpdatedAt},
	}}}

	_, err := TourData(op.DB, "tours").UpdateOne(ctx, filter, update)
	if err != nil {
		return false, err
	}
	return true, nil
}

func (op *OperatorDB) LoadTour(tourID primitive.ObjectID) (primitive.M, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)
	defer cancel()
	filter := bson.D{{Key: "_id", Value: tourID}}
	var res bson.M
	err := TourData(op.DB, "tours").FindOne(ctx, filter).Decode(&res)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, err
		}
		op.App.ErrorLogger.Fatalf("error while searching for data : %v ", err)
	}
	return res, nil
}
