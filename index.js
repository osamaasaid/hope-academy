console.log("working");
const express = require('express');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv/config');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//views
app.get('/', (req,res) => {
    res.render('pages/home')
});

app.get('programs', (req,res) => {
    res.render('pages/programs')
});

app.get('contact', (req,res) => {
    res.render('pages/contact')
});


//server
app.listen(process.env.PORT || 3000,
() => console.log("hello there!"));