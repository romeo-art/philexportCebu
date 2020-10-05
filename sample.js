const express = require('express');
const { link } = require('fs');
const app = new express();
const port = 3030;

app.use("/style.css", express.static(__dirname + '/style.css'));
app.use("/script.js", express.static(__dirname + '/script.js'));

app.get('/', function (request, response) {
    response.sendFile('C:/Users/user23.HOST3-PC.000/Desktop/PhilExport/philexport.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
