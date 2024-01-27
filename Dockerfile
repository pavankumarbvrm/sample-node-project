FROM node:14.17.5

WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install -g pm2
COPY . .

# CMD ["pm2", "start", "app.js", "--name", "my-app"]
# CMD ["node", "app.js"]
CMD ["node", "app.js", "&", "node", "app2.js"]
# Expose both ports
EXPOSE 3005 4005
