let express = require('express');
let app = express();

app.get("/", (req, res) => {
    
    res.sendFile(absolutePath = __dirname + '/view/index.html');
});

console.log("Hello World");

































 module.exports = app;
