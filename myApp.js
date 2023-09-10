let express = require('express');
let app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    
    res.sendFile(absolutePath = __dirname + '/views/index.html');
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE;
    
    if ( messageStyle === 'uppercase'){
        
        res.json({ message: "Hello json" });
        
    } else{
        
        res.json({ message: "HELLO JSON"})
    }
});

































 module.exports = app;
