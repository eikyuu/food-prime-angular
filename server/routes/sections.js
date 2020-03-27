const express = require('express');
const connection = require('../db');
const router = express.Router();

// respond to requests on `/api/sections`
router.get('/', (req, res) => {
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

module.exports = router;
