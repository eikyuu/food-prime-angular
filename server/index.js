// dotenv loads parameters (port and database config) from .env
require('dotenv').config();
const express = require('express');
const api = require('./routes');
const cors = require('cors')
const bodyParser = require('body-parser');
// const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  
  console.log(`Server is listening on ${process.env.PORT}`);
});
