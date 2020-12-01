import { API_KEY } from './utils'
import axios from 'axios'
axios.defaults

export const getCurrentTime = (locationName: string) => {

const url: string = `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`

    axios.get(url)
        .then(response => {

            if (response.status === 200) {
                
                let time = new Date(response.data.dt),
                    hours: any = time.getHours(),
                    minutes: any = time.getMinutes(),
                    currentTime = ''
                
                switch (true) {

                    case minutes < 10:
                        minutes = `0${minutes}`
                        break;
                    
                    case hours === 12:
                        currentTime = `12:${minutes} PM`
                        break;
                    
                    case hours > 12:
                        currentTime = `${hours - 12}:${minutes} PM`
                        break;
                    
                    case hours === 0:
                        currentTime = `12:${minutes} AM`
                        break;
                
                    default:
                        currentTime = `${hours}:${minutes} AM`
                        break;
                }
                console.log(currentTime)
            }            
        })
        .catch(error => {
            let errorMessage = {
                message: error.message
            } 
            console.log(errorMessage)
        })
}