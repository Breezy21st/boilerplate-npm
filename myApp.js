let express = require('express');
let app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE || 'uppercase';
    
    if ( messageStyle === 'uppercase'){

        res.json({ message: "HELLO JSON"})
    } else{
        res.json({ message: "Hello json" });
    }
});

































 module.exports = app;
