const app = require('./app.js');
const db = require('../db/index.js');
const PORT = 3003;
app.listen(PORT, () => {
  console.log('App listening on 3003...');
});
