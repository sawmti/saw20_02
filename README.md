[![Continuous integration for SAW template](https://github.com/sawmti/saw20_02/actions/workflows/ci.yml/badge.svg)](https://github.com/sawmti/saw20_02/actions/workflows/ci.yml)

# Project structure - Group SAW 20_02

This repository contains two submodules to external github repositories. One of them contains a client and the second one an api to feed data to the client.

- [client](https://github.com/mdbesoain/saw_g02_client) Contains the source code of the web client. It was implemented with React using the [Material Dashboard React. Coded by Creative Tim"](https://www.creative-tim.com/product/material-dashboard-react)

- [api](https://github.com/sawmti/saw20_02/tree/main/api) contains the source code of the REST API
## Running locally

If you want to execute the project you will need 
[Node.js and npm](https://www.npmjs.com/get-npm). 

Compile and run the web app:

```
npm install
npm start
```

You should be able to access the application in [http://localhost:3000](http://localhost:3000).

## Running from Docker

It is possible to run the application from docker with

```
docker build -t "saw2002" .
docker run saw2002
```

or 

```
docker-compose up
```

## Contributors

- [Jose Emilio Labra Gayo](https://github.com/labra)
- [Victor Ortiz](https://github.com/vortiz86)
- [Paolo Saxton](https://github.com/OPOSAX)
- [Matias Diaz](https://github.com/mdbesoain)


