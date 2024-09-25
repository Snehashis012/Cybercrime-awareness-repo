const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static('public'));

// Routes for each page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/woman-crime', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'woman-crime.html'));
});

app.get('/child-crime', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'child-crime.html'));
});

app.get('/financial-fraud', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'financial-fraud.html'));
});

app.get('/other-crime', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'other-crime.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
