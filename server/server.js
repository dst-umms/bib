var express = require('express');
var app = express();

app.get('/server', function (req, res) {
  res.json({ title: 'Hello World from server!' });
});

app.listen(7999, function () {
  console.log('Server running on port 7999!');
});
