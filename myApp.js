let express = require('express');
let app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {

    
    if ( process.env.MESSAGE_STYLE === 'uppercase'){

        res.json({ message: "Hello json"})
    } else{
        res.json({ message: "HELLO JSON" });
    }
});

































 module.exports = app;
