// Get 3rd Party modules
const express = require("express");
// Get Custom built modules
const fm = require("./filemgr");

// Create the express http server
const app = express();

// Define some built-in middleware
app.use(express.static("./Client"));
app.use(express.json());

// Define HTTP routes listenting for requests
app.get("/api", async (req,res) => {
  try{
    res.send(await fm.ReadData());
  }catch(err){
    console.error(err);
  }
});

app.post("/api", async (req,res) => {
  try{
    await fm.WriteData(req.body);
    res.send();
  }catch(err){
    console.error(err);
  }
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

