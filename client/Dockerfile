# pull the node alpine image from docker hub for use
FROM node:alpine

# Setup the working directory to run the image instance for the appliaction
WORKDIR "/app"

# Copy the dependencies file in the working directory
COPY ./package.json ./

# Execute command to install all dependencies
RUN npm install

# Copy all the files in the local PWD to the container PWD
COPY . .

# Execute the command to start the application
CMD ["npm", "run", "start"]