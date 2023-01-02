#pull the base image from docker hub
FROM golang:1.19.2-alpine

#Set the working directory to use
WORKDIR /app

#Copy the golang dependencies file into the work directory
COPY go.mod .
COPY go.sum .

#download all the dependencies packages needed and verify the packages
RUN go mod download && go mod verify

#copy all the files in the root project directory into the working directory
COPY . .

# build your code from the main folder/file in the parent folder
# and disabled using C code and use just pure default golang
RUN GOOS=linux CGO_ENABLED=0 GOARCH=amd64 go build -ldflags="-w -s" -o travasAPI.out -mod=vendor ./cmd/web/*.go

# RUN chmod +x /app/travasAPI

#Compile the executable file
CMD [ "./travasAPI.out" ]