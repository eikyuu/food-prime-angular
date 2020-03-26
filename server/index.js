// dotenv loads parameters (port and database config) from .env
require('dotenv').config();
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const connection = require('./db');

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// respond to requests on `/api/sections`
app.get('/api/sections', (req, res) => {
  // send an SQL query to get all sections
  connection.query('SELECT * FROM section', (err, results) => {
    if (err) {
      // If an error has occurred, then the client is informed of the error
      res.status(500).json({
        error: err.message,
        sql: err.sql,
      });
    } else {
      // If everything went well, we send the result of the SQL query as JSON
      res.json(results);
    }
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  
  console.log(`Server is listening on ${process.env.PORT}`);
});
