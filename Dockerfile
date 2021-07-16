FROM node:14.17.3
WORKDIR /usr/src/app
COPY . ./
RUN npm install --production
CMD [ "node", "server.js" ]
