console.log('Client side JS file is loaded!');

fetch('http://localhost:3000/weather?address=boston')
  .then(response => {
    response.json().then(data => {
      if(data.error) {
        console.log(data.error);
      } else {
        console.log(data[0].location);
        console.log(data[0].forecast);
      }
    })
  })

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;

  fetch(`http://localhost:3000/weather?address=${location}`)
  .then(response => {
    response.json().then(data => {
      if(data.error) {
        console.log(data.error);
      } else {
        console.log(data[0].location);
        console.log(data[0].forecast);
      }
    })
  })
  console.log(location);
})

/**
 * Goal: Use input value to get weather
 * 
 * 1. Migrate the fetch call into the submit callback
 * 2. Use the search text as the address query string value
 * 3. Submit the form with a valid and invalid value to test
 */