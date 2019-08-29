const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.post('/', (req, res) => {
  let searchQuery = req.body;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchQuery}`;
  axios
    .get(url)
    .then(result => {
      console.log(`successful GET from giphy API`)
      console.log('response from giphy: ', result.data)
      res.send(result.data)
    })
    .catch(error => {
      console.log('ERROR on GET route from giphy API, ', error)
      res.sendStatus(500)
    })
})

module.exports = router
