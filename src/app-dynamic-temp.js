const path = require('path');  // Core node
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');

app.set('view engine', 'hbs'); // -> setting the handlebar template
app.set('views', viewsPath); // -> setting the viewpath template

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Esra Kartal'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Esra Kartal'
  })
})

/**
 * Goal: Create a template for help page
 * 
 * 1. Setup a help template to render a help message to the screen
 * 2. Setup the help route and render the template with an example message
 * 3. Visit the route in the browser and see your help message print
 */
app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.'
  })
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