#!/usr/bin/env node
/* jshint esnext:true */
const express = require('express');
const app = express();

app.use(express.static('client/public'));

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
