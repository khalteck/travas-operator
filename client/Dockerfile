# pull the node alpine image from docker hub for use
FROM node:alpine as builder

# Setup the working directory to run the image instance for the appliaction
WORKDIR /app

# Copy the dependencies file in the working directory
COPY ./package.json /app

# Execute command to install all dependencies
RUN yarn install
COPY . /app

RUN yarn run build

FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html