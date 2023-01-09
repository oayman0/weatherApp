/**
 * 
 * npm install express --save
 * npm install body-parser
 * npm install cors
 */


// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initalize the main project folder
app.use(express.static('website'));

const port=8000;
/** 
 * const server =app.listen(port,listening);
 * function listening(){
 * console.log('server running')
 * console.log(`running on local host: ${port}`);
 * } 
*/
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});


/* Empty JS object to act as endpoint for all routes */
projectData = {};

//Route, HTTP GET Request
app.get("/all",function(request,response){
    response.send(projectData);
});
/**
 *  
 * app.get('/all', (request, response)=> {
 * response.send(projectData);
 * });
 * 
 */

/** 
 * app.get('/all', sendData);
 * function sendData (request, response) {
 * response.send(projectData);
 * };
 */
