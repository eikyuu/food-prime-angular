const express = require('express');
const connection = require('../db');
const router = express.Router();
const bcrypt = require("bcrypt");

// respond to requests on `/api/sections`
router.get('/', (req, res) => {
    // send an SQL query to get all sections
    connection.query('SELECT * FROM user', (err, results) => {
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

    router.post("/signup", (req, res, next) => {
      bcrypt.hash(req.body.password, 10).then((hash) => {
          const user = new userSchema({
              name: req.body.name,
              email: req.body.email,
              password: hash
          });
          user.save().then((response) => {
              res.status(201).json({
                  message: "User successfully created!",
                  result: response
              });
          }).catch(error => {
              res.status(500).json({
                  error: error
              });
          });
      });
  });

  router.put('/:id', (req, res) => {
    const idUser = req.params.id;
    const formData = req.body;
    console.log(req.body);
    connection.query('UPDATE user SET ? WHERE id = ?', [formData, idUser], err => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la modification de l'utilisateur");
        } else {
          res.status(200).send({ status: 'OK'});
        }
      });
  });

  router.delete('/:id', (req, res) => {
    const idUser = req.params.id;
    console.log(req.body);
    connection.query('DELETE FROM user WHERE id = ?', [idUser], err => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la suppression d'un chantier");
        } else {
          res.sendStatus(200);
        }
      });
  });
module.exports = router;
