
const express = require('express');
const path = require('path');
const person = require('./person.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('index', { person });
});

app.listen(PORT, () => {
    console.log(`Server töötab pordil ${PORT}`);
});