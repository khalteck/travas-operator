package query

import (
	"github.com/travas-io/travas-op/model"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Repo interface {
	// Operator Queries
	InsertUser(user *model.Operator) (bool, int, error)
	VerifyUser(email string) (primitive.M, error)
	UpdateInfo(userID primitive.ObjectID, tk map[string]string) (bool, error)

	// Tours Queries
	InsertPackage(id primitive.ObjectID, file []map[string]any) (primitive.ObjectID, bool, error)
	UpdatePackage(userID primitive.ObjectID, tour *model.Tour) (bool, error)
	LoadTour(tourID primitive.ObjectID) (primitive.M, error)
	ValidTourRequest() ([]primitive.M, error)

	InsertTourGuide(tg *model.TourGuide) (bool, error)
	FindTourGuide(operatorID primitive.ObjectID) ([]primitive.M, error)
	UpdateTourGuide(guideID string) error
}
