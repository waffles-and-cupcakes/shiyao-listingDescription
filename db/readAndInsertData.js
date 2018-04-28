const { db } = require('./index.js');
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/airbnbDetails';
const Listing = require('./listingSchema.js');
const fs = require('fs');
mongoose.Promise = global.Promise;

const readAndInsertJSON = function(callback) {
  for (var i = 1; i <= 100; i++) {
    fs.readFile(`db/fakeData/${i}.json`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      data = JSON.parse(data);
      Listing.insertMany(data, function(err, result) {
        if (err) {
          console.log('you got an error when inserting');
          callback();
        } else {
          console.log('inserted!');
          callback();
        }
      });
    });
  }
};

readAndInsertJSON(() => {
  db.close();
});