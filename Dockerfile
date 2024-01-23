FROM node:14.17.5

WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install -g pm2
COPY . .
#CMD ["pm2", "start", "app.js", "--watch", "--no-daemon"]
CMD ["node","app.js"]
EXPOSE 3005
