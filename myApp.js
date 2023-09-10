let express = require('express');
let app = express();
require("dotenv").config();

// Logger middleware
app.use((req, res, next) => {
    const logString = req.method + " " + req.path + " - " + req.ip;
    console.log(logString);
    next(); // Call next() to continue processing the request
  });
  
  app.get('/', (req, res) => {
    res.send('Homepage');
  });


app.get("/", (req, res) => {
    
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {

    
    if ( process.env.MESSAGE_STYLE === 'uppercase'){

        res.json({ message: "HELLO JSON"});
    } else {
        res.json({ message: "Hello json" });
    }
});
































 module.exports = app;
