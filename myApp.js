let express = require('express');
let app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {

    var response = "Hello World".toUpperCase();

    if ( process.env.MESSAGE_STYLE === 'uppercase'){

        response = "Hello World".toUpperCase();
    } else{
        response = "Hello World";
    }
});

































 module.exports = app;
