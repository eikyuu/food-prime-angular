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

  router.put('/:id', async (req, res) => {
    const idSection = req.params.id;
    const formData = req.body;
    console.log(req.body);
    connection.query('UPDATE section SET ? WHERE id = ?', [formData, idSection], err => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la modification d'un chantier");
        } else {
          res.json();
        }
      });
  });

module.exports = router;
