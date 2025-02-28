# Use the official Node.js image with version 14.17.5 as the base image
FROM node:14.17.5

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install pm2 globally
RUN npm install -g pm2

# Copy the entire application code to the working directory
COPY . .

# Expose port 3005
EXPOSE 3005

# Start the application using PM2
CMD ["pm2-runtime", "start", "app.js", "--name", "my-app"]
