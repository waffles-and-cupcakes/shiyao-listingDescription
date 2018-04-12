const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.static('../public'));
app.get('/rooms/details', (req, res) => {
  //id = req.params.id;
  res.send('hihi');
});

app.listen(PORT, () => {
  console.log('App listening on 3003...');
});