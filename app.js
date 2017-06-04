const express = require('express');
const app = express();
const path = require('path');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Articles'
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});