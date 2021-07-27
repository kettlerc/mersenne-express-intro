console.log('Hello from my first express app!');

const express = require('express');

const app = express();

app.use(express.static('./server/public'));

const port = 5000;
app.listen(port, function() {
    console.log('app is running on localhost:5000'); 
});