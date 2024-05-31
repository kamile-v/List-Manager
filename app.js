// Get 3rd Party modules
const express = require("express");
// Get Custom built modules
const fm = require("./filemgr");

//const path = require("path");

// Create the express http server
const app = express();

// Define some built-in middleware
app.use(express.static("./Client"));
app.use(express.json());

/** 
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "Client")));

// Middleware function to log request details
const requestLogger = (req, res, next) => {
  console.log(`${req.method} request for '${req.path}'`);
  next(); // Pass control to the next middleware function
}

// Middleware function to check for admin 
// and bypass the remaining middleware
const checkId = (req, res, next) => {
  let qId = req.query.id;
  if (qId === undefined || qId == "1") {
    next();
  } else {
    res.status(400).send(`Bad Query. ${qId}`);
  }
};

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};

// Register the middleware
app.use(requestLogger);
app.use(checkId);**/

// Define HTTP routes listenting for requests
app.get("/api", async (req,res) => {
  res.setEncoding("List retrieved");
});

app.post("/api", async (req,res) => {

})

// page not found route
app.all("*", (req,res) => {
  res.status(404).send("<h1>Page Not Found...</h1>");
});

// Create a server
const appName = "Simple List";
const port = 5500;
app.listen(port, () => {
  console.log(`App ${appName} is running on http://localhost:${port}`);
})

