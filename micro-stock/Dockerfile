# Step 1: Build the Angular app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if it exists)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular project
RUN npm run build --prod

# Step 2: Serve the Angular app using a lightweight HTTP server
FROM nginx:alpine

# Copy the built Angular project from the build stage to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to allow external access to the application
EXPOSE 80

# Start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
