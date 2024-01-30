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

# Expose ports 3005 and 4005
EXPOSE 3005 4005

# Start the applications using PM2
CMD ["pm2-runtime", "start", "app.js", "--name", "my-app", "--", "pm2-runtime", "start", "app2.js", "--name", "my-app2"]


# FROM node:14.17.5

# WORKDIR /app
# COPY package.json ./
# RUN npm install
# RUN npm install -g pm2
# COPY . .

# # CMD ["pm2", "start", "app.js", "--name", "my-app"]
# # CMD ["node", "app.js"]
# CMD ["node", "app.js"]
# # Expose both ports
# EXPOSE 3005
