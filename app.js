const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node_articles');
let db = mongoose.connection;

// Check DB connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
  console.log(err);
});

// Bring in models
let Article = require('./models/article');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home route
app.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if(err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Articles',
        articles: articles
      });
    }
  });
});

// Add articles route
app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title: 'Add article'
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});