'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('000Hello world000\n');
=======
  res.send('1234Hello world4321\n');
>>>>>>> e4e26997584cebbf8243a43089fcd0ed3ae134fe
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
