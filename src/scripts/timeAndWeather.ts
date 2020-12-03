import axios from "axios"

import { API_KEY } from "./utils"
import { getCurrentTime } from "./currentTime"

axios.defaults

export const logCurrentTimeAndWeather = (
  locationName: string,
  postalCode: string,
  countryCode: string
) => {
  const url: string = `http://api.openweathermap.org/data/2.5/weather?zip=${postalCode},${countryCode}&appid=${API_KEY}&units=imperial`

  axios
    .get(url)
    .then(response => {
      if (response.status === 200) {
        if (locationName === response.data.name) {
          getCurrentTime(locationName)
          let weather = {
            main: response.data.weather[0].main,
            description: response.data.weather[0].description,
          }
          console.log(weather)
        }
      } else {
        let error = new Error(
          `${locationName} doesn't match any location. Please try a valid input.`
        )
        console.log(error)
      }
    })
    .catch(error => {
      let errorMessage = {
        message: error.message,
      }
      console.log(errorMessage)
    })
}
