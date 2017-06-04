const express = require('express');
const app = express();
const path = require('path');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home route
app.get('/', (req, res) => {
  let articles = [
    {
      id: 1,
      title: 'Article one',
      author: 'Vjeko',
      body: 'Noice article one'
    },
    {
      id: 2,
      title: 'Article two',
      author: 'Vjeko',
      body: 'Noice article two'
    }
  ];
  res.render('index', {
    title: 'Articles',
    articles: articles
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