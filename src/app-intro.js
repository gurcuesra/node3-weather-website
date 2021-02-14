const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('Hello express!')
})

app.get('/help', (req, res) => {
  res.send('Help page')
})

/**
 * Goal: Setup 2 new routes
 * 
 * 1. Setup an about route an render a page title
 * 2. Setupe a weather route and render a page title
 * 3. Test your work by visiting both in the browser
 */
app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/weather', (req, res) => {
  res.send('Your weather')
})


app.listen(3000, () => {
  console.log('Server is up on port 3000.');
})
// for running the app