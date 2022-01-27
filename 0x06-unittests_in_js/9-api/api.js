const express = require('express');
const app = express();

const port = 7865;

app.get('/', function (req, res) {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', function (req, res) {
  if (isNaN(req.params.id)) {
    res.sendStatus(404);
  } else {
    res.send(`Payment methods for cart ${req.params.id}`);
  }
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
