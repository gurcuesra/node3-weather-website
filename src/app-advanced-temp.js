const path = require('path');  // Core node
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
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

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Esra Kartal'
  })
})

/**
 * Goal: Create a partial for the footer
 * 
 * 1. Setup the template for the footer partial "Created by Some Name"
 * 2. Render the partial at the bottom of all 3 pages
 * 3. Test your work by visiting all 3 pages
 */


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