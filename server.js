// server.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || PORT;


app.use(express.static('./dist'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
})


app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});