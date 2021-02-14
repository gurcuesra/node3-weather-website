const path = require('path');  // Core node
const express = require('express');

// console.log(__dirname); 
// // /Users/esrakartal/Desktop/udemy-node/web-server/src

// // console.log(__filename);
// // /Users/esrakartal/Desktop/udemy-node/web-server/src/app.js

// console.log(path.join(__dirname, '../public'));
// // /Users/esrakartal/Desktop/udemy-node/web-server/public

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath)); // From a static file
// index.html is always serve for root file

// app.get('', (req, res) => {
//   res.send('<h1>Weather</h1>')
// })

/**
 * Goal: Create 2 more HTML files
 * 
 * 1. Create a html page for about with "About" title
 * 2. Create a html page for help with "Help" title
 * 3. Remove the old route handlers for both
 * 4. Visit both in the browser to test your work
 */
// Above code is working with about and help if you open below urls:
// About -> http://localhost:3000/about.html
// Help  -> http://localhost:3000/help.html

// app.get('/help', (req, res) => {
//   res.send([
//     {
//       name: 'Andrew',
//       age: 27
//     },
//     {
//       name: 'Sarah',
//       age: 30
//     }
//   ])
// })

// app.get('/about', (req, res) => {
//   res.send('<h1>About</h1>')
// })

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