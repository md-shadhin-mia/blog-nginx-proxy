# Use the official Nginx image as the base image
FROM nginx

# Copy the Nginx configuration file into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the static files from the build stage into the container
COPY ./dist /usr/share/nginx/html

# Expose the ports that Nginx will listen on
EXPOSE 80 443

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
