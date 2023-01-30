# This will create a connection between travas-server(server-side),
# travas-client(client-side) with nginx. So as to process the requests
# made appropriately and return expected response

# pull down the nginx image from docker hub
FROM nginx

# copy and make use of the custom configuration settings for nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf