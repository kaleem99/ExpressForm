const express = require('./node_modules/express');
const app = express();
const port = 3000;
const path = require('path');
const mongodb = require('./node_modules/mongodb');

// app.use('/', express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`running on ://localhost:${port}`));
