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
 * Goal: Update weather endpoint to accept address
 * 
 * 1. No address? Send back an error message
 * 2. Address? Send back the static JSON
 *    - Add address property onto JSON whihc returns provided address
 * 3. Test /weather and /weather?address=philadelphia
 */
app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  } else {
    res.send([
      {
        forecast: 'Chilly',
        location: 'Seattle',
        address: req.query.address
      }
    ])
  }
  
})

// http://localhost:3000/products?search=games&rating=5
// Below type of requests will be req
app.get('/products', (req, res) => {
  // console.log(req.query);
  // // { search: 'games', rating: '5' }
  // console.log(req.query.search);
  // // games

  // This makes search key as REQUIRED
  if(!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
      // http://localhost:3000/products -> if there is NO search
    })
  } else {
    res.send({
      products: []
    })
  }
})

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