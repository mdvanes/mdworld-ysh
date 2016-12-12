#!/usr/bin/env node
/* jshint esnext:true */
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('client/public'));

app.listen(port, function () {
  	//console.log(`Server listening on port ${port}!`);
  	console.log('Server listening on port ${port}!');
});
