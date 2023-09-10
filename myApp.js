let express = require('express');
let app = express();

app.get("/", (req, res) => {
    absolutePath = __dirname + '/view/index.html';
    res.send(absolutePath);
});

console.log("Hello World");

































 module.exports = app;
