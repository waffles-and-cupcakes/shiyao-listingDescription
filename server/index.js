const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const Listing = require('../db/listing.js');
const path = require('path');

const PORT = 3003;

app.use('/rooms/1/details', express.static('../public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/rooms/:id/data', (req, res) => {
  var id = req.params.id;
  Listing.findOne({_id: id}).exec((err, listings) => {
    if (err) {
      res.send('You got an error when saving data');
    } else {
      res.send(listings);
    }
  });
});

app.listen(PORT, () => {
  console.log('App listening on 3003...');
});