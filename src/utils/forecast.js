const request = require('postman-request');

/**
 * Goal: Add new data to forecast
 * 
 * 1. Update the forecast string to include new data
 * 2. Commit your changes
 * 3. Push your changes to Github and deploy to Heroku
 * 4. Test your work in the live application!
 */

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=285b270c8bca9d1f227fa3ee485f4fe7&query=${lat},${long}&units=f`;

  request({url, json: true}, (error, {body}) => {
    if(error) {
      callback('Unable to connect to location services!', undefined);
    } else if(body.error) {
      callback('Unable to find the location', undefined);
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.feelslike}%.`)
    }
  })
}

module.exports = forecast;