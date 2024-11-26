# Step 1: Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Copy the project files into the container
COPY . ./usr/share/nginx/html

# Step 3: Expose port 80 (default port for HTTP)
EXPOSE 80

# Step 4: Start the Nginx server (this is the default command for the Nginx image)
CMD ["nginx", "-g", "daemon off;"]
