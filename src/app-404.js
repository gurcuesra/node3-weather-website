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

// // This is for specific error handler
// app.get('/help/*', (req, res) => {
//   res.send('Help article NOT found!')
// })

// // For handling 404 errors. * mean, which is NOT set. 
// // This method MUST be before listen. Because, it will check the each get route,
// // if it is not matching with any of them it will run this.
// app.get('*', (req, res) => {
//   res.send('My 404 page');
// })

/**
 * Goal: Create and render a 404 page with handlebars
 * 
 * 1. Setup the template to render the header and footer
 * 2. Setup the template to render an error message in a paragraph
 * 3. Render the template for both 404 routes
 *    - Page not found.
 *    - Help article not found.
 * 4. Test your work. Visit /what and /help/units
 */
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Esra Kartal',
    errorMsg: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Esra Kartal',
    errorMsg: 'Page not found.'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
})