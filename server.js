const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Listening on port number ${port}`);
});
