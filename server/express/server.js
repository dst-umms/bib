var express = require('express');
var app = express();

app.get('/express', function (req, res) {
  res.json({ title: 'Hello World from server!' });
});

app.listen(7998, function () {
  console.log('Server running on port 7998!');
});
