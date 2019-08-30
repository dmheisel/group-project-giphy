const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM category ORDER BY name ASC`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    let updatedFavorite = req.body;
    console.log('new category id', updatedFavorite);

    let queryText =
        `UPDATE "favorites" SET "category_id" = $1 WHERE "id" = $2`;
    pool.query(queryText, [updatedFavorite.categoryID, updatedFavorite.gifID])
        .then(results => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('error adding new ID', error);
            res.sendStatus(500);
        })


});

module.exports = router;
