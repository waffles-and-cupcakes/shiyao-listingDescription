const db = require('./index.js');
const mongoose = require('mongoose');
const Listing = require('./listingSchema.js');
const fs = require('fs');
mongoose.Promise = global.Promise;

const readAndInsertJSON = function() {
  for (var i = 1; i <= 100; i++) {
    fs.readFile(`./fakeData/${i}.json`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      data = JSON.parse(data);
      Listing.insertMany(data, function(err, result) {
        if (err) {
          console.log('you got an error when inserting');
        } else {
          console.log('inserted!');
        }
      });
    });
  }
};

readAndInsertJSON();