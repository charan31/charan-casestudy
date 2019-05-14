# charan-casestudy
This API service endpoint in NodeJS which reads JSON data from a third party REST API and generates a CSV file to download.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


server is running at 8000 port.

```
    http://localhost:8000/users/api/csv_file?page=1
```

### Installing

To install all required packages, run the following

```
npm install
```

running npm install will create node_modules folder in your root directory.

### Running the server

To Start the server, run the following command. server running at PORT: 8000

```
    npm start
```

after server started, go to below url from postman/browser

```
Method   : GET
URL      : http://localhost:8000/users/api/csv_file?page=1
```


### Running the tests

As part of this case study, i have implemented few unit test cases also, 

To Start the server, run the following command

```
    npm test
```

### Packages/Dependencies used.

1. i have used babel to convert es6+ code into backward compatible version of JS
2. Express as routing framework
3. JOI used for request validations
4. express-boom i haved to send error responses.
5. Json2Csv package used to convert json object to csv
6. Mocha for Unittesting.


### Folder Structure:

    src      
        index.js - main program file

        routes--> 
            health.js --> this route is to check the server running health status.
            users.js  --> this the main api i used to implement the given casestudy.

        services -->
            users.service.js --> this file used to implement third party service call.
            request.js       --> this file handles external request operations.
            log.js           --> pino logger middleware.

    test

        users.test.js --> As part of this case study, i have implemented few unit test cases also.


### Routes:

i have implemented two routes.

```
Method   : GET
URL      : http://localhost:8000/health
```

```
Method   : GET
URL      : http://localhost:8000/users/api/csv_file?page=1
```


