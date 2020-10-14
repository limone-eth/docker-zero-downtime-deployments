'use strict';
const os = require('os');
const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(os.hostname());
});

app.listen(PORT, HOST);
