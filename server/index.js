const express = require('express');
const app = express();
const PORT = 3003;
const db = require('../db/index.js');
const Listing = require('../db/listing.js');

app.use(express.static('../public'));

app.get('/rooms/:id/details', (req, res) => {
  var id = req.params.id;
  Listing.find({_id: id}).exec((err, listings) => {
    if (err) {
      console.log(err);
    } else {
      res.send(listings);
    }
  });
});

app.listen(PORT, () => {
  console.log('App listening on 3003...');
});