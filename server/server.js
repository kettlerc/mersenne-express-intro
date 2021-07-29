const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const quotes = [
    {
        text: 'Debugging is like being the detective in a crime movie where you are also the murderer',
        author: 'Filipe Fortes'
    },
    {
        text: 'If you want to increase your success rate, double your failure rate',
        author: 'Thomas Watson Jr.'
    },
    {
        text: 'Code is there to explain the comments to the computer',
        author: 'Andy Harris'
    }
];

app.use(express.static('./server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/quotes', (req, res) => {
    console.log('ready to send back data');
    res.send(quotes);
});

app.post('/quotes', (req, res) => {
    let newQuote = req.body;
    if (!newQuote.author || !newQuote.text) {
        res.status(400).send({
            message: 'missing required field'
        });
        return;
    }
    quotes.push(newQuote);
    console.log(quotes);
    res.sendStatus(201);   
});

const port = 5000;
app.listen(port, () => {
    console.log('app is running on localhost:', port); 
});