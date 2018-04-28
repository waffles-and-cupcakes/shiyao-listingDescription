const { db } = require('./index.js');
const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/airbnbDetails';
const Listing = require('./listingSchema.js');
const fs = require('fs');
mongoose.Promise = global.Promise;

const readAndInsertJSON = (callback) => {
  for (let i = 1; i <= 100; i++) {
    fs.readFile(`db/fakeData/${i}.json`, 'utf8', (readErr, data) => {
      if (readErr) {
        throw readErr;
      }
      var parsedData = JSON.parse(data);
      Listing.insertMany(parsedData, function(insertErr, result) {
        if (insertErr) {
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
