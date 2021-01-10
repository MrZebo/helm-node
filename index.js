'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('1234Hello world4321\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
