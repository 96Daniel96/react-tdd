const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/data', (req, res) => {
  let id = req.query.id;

  setTimeout(() => {
    res.send({ id, value: 'DataFromAPI' });
  }, 1500);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
