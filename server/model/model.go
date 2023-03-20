package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Operator struct {
	ID              primitive.ObjectID `bson:"_id" json:"_id"`
	FullName        string             `bson:"full_name,omitempty"`
	IDCard          map[string]any     `bson:"id_card,omitempty"`
	Certificate     map[string]any     `bson:"certificate,omitempty"`
	CompanyName     string             `bson:"company_name,omitempty"`
	Email           string             `bson:"email" Usage:"required,alphanumeric" json:"email,omitempty"`
	Password        string             `bson:"password" Usage:"required" json:"password,omitempty"`
	ConfirmPassword string             `bson:"confirm_password" Usage:"required" json:"confirm_password,omitempty"`
	Phone           string             `bson:"phone" Usage:"required" json:"phone,omitempty"`
	Status          string             `bson:"status"`
	TourGuide       []string           `bson:"guide" json:"guide,omitempty"`
	ToursList       []Tour             `bson:"tours_list" json:"tours_list,omitempty"`
	GeoLocation     string             `bson:"geo_location" json:"geo_location,omitempty"`
	Token           string             `bson:"token" Usage:"jwt" json:"token,omitempty"`
	NewToken        string             `bson:"new_token" Usage:"jwt" json:"new_token,omitempty"`
	CreatedAt       time.Time          `bson:"created_at" Usage:"datetime" json:"created_at"`
	UpdatedAt       time.Time          `bson:"updated_at" Usage:"datetime" json:"updated_at"`
}

type TourGuide struct {
	OperatorID   primitive.ObjectID `bson:"operator_id" json:"operator_id,omitempty"`
	ID           string             `bson:"_id" json:"_id"`
	Name         string             `bson:"full_name" json:"full_name"`
	Bio          string             `bson:"bio" json:"bio"`
	ProfileImage map[string]any     `bson:"profile_image" json:"profile_image"`
	IDCard       map[string]any     `bson:"id_card" json:"_id_card"`
}

type Tour struct {
	ID              primitive.ObjectID     `bson:"_id" json:"_id"`
	OperatorID      primitive.ObjectID     `bson:"operator_id" json:"operator_id,omitempty"`
	Title           string                 `bson:"title" json:"title,omitempty"`
	Destination     string                 `bson:"destination" json:"destination"`
	MeetingPoint    string                 `bson:"meeting_point" json:"meeting_point,omitempty"`
	StartTime       string                 `bson:"start_time" json:"start_time,omitempty"`
	StartDate       string                 `bson:"start_date" json:"start_date,omitempty"`
	EndDate         string                 `bson:"end_date" json:"end_date,omitempty"`
	Price           string                 `bson:"price" json:"price"`
	Contact         string                 `bson:"contact" json:"contact,omitempty"`
	Language        string                 `bson:"language" json:"language,omitempty"`
	Image           map[string][]any `bson:"tour_image" json:"tour_image"`
	ImageStream     map[string][]any       `bson:"image_stream" json:"image_stream"`
	NumberOfTourist string                 `bson:"number_of_tourist" json:"number_of_tourist,omitempty"`
	Description     string                 `bson:"description" json:"description,omitempty"`
	WhatToExpect    map[string]string      `bson:"what_to_expect" json:"what_to_expect"`
	Rules           map[string]string      `bson:"rules" json:"rules"`
	CreatedAt       time.Time              `bson:"created_at" Usage:"datetime" json:"created_at"`
	UpdatedAt       time.Time              `bson:"updated_at" Usage:"datetime" json:"updated_at"`
}

type UserInfo struct {
	ID          primitive.ObjectID
	Email       string
	Password    string
	CompanyName string
}

type Tourist struct {
	ID            primitive.ObjectID `bson:"_id"`
	FirstName     string             `bson:"first_name" Usage:"required,alpha,omitempty"`
	LastName      string             `bson:"last_name" Usage:"required,alpha,omitempty"`
	Email         string             `bson:"email" Usage:"required,alphanumeric"`
	Password      string             `bson:"password" Usage:"required"`
	CheckPassword string             `bson:"check_password" Usage:"required"`
	Phone         string             `bson:"phone" Usage:"required"`
	BookedTours   []Tour             `bson:"booked_tour"`
	RequestTours  []Tour             `bson:"request_tour"`
	GeoLocation   string             `bson:"geo_location"`
	Token         string             `bson:"token" Usage:"jwt"`
	NewToken      string             `bson:"new_token" Usage:"jwt"`
	CreatedAt     time.Time          `bson:"created_at" Usage:"datetime"`
	UpdatedAt     time.Time          `bson:"updated_at" Usage:"datetime"`
}
