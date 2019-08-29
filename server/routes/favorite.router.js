const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  pool.query('SELECT * from "favorites";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error', error)
    res.sendStatus(500);
  });
  
});

// add a new favorite 
router.post('/', (req, res) => {
  let newfavorite = req.body;
  console.log('newFavorite', newfavorite);

  let queryText =
              `INSERT INTO "favorites" ("img_link")
              VALUES ($1);`;
  pool.query(queryText, [newfavorite])
    .then(results => {
      res.sendStatus(200);
    })
    .catch( error => {
      console.log('error adding newfavorite', error);
      res.sendStatus(500);
    })
  
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
