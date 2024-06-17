// Create web server
// 1. require express
// 2. create express instance
// 3. create a route to handle comments
// 4. start server

// 1. require express
const express = require('express');

// 2. create express instance
const app = express();

// 3. create a route to handle comments
app.get('/comments', (req, res) => {
  res.send('Comments route');
});

// 4. start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server
// node comments.js
// Open your browser and go to http://localhost:3000/comments
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data
let comments = [
  {
    id: 1,
    text: 'Hello World'
  }
];
