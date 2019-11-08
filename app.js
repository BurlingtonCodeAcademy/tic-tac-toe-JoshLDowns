const express = require('express');
const app = express();
const port = process.env.PORT || 6969;
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

//app.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname + '/index.html'));
//});

app.listen(port);