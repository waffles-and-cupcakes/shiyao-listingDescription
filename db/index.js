const mongoose = require('mongoose');
const mongoUri = 'mongodb://mongo/airbnbDetails';
mongoose.Promise = global.Promise;

mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on('open', () => {
  console.log('connection success');
});


module.exports.db = db;
