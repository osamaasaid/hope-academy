console.log("working");
const express = require('express');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv/config');

const app = express();

app.set('view engine', 'ejs'):