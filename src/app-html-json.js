const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Andrew',
      age: 27
    },
    {
      name: 'Sarah',
      age: 30
    }
  ])
})

/**
 * Goal: Update routes
 * 
 * 1. Setup about route to render a title with HTML
 * 2. Setup a weather route to send back JSON
 *    - Object with forecast and location strings
 * 3. Test your work by visiting both in the browser
 */
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
  res.send([
    {
      forecast: 'Chilly',
      location: 'Seattle'
    },
    {
      forecast: 'Cloudy',
      location: 'Los Angeles'
    }
  ])
})


app.listen(3000, () => {
  console.log('Server is up on port 3000.');
})
// for running the app