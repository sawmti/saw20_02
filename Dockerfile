FROM node:14.17.3
WORKDIR /usr/src/app
COPY . ./
RUN ["cd client","npm i material-dashboard-react", "npm install --production"]
CMD [ "node", "server.js" ]
