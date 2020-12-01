"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logCurrentTimeAndWeather = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
const currentTime_1 = require("./currentTime");
axios_1.default.defaults;
const logCurrentTimeAndWeather = (locationName, postalCode, countryCode) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${postalCode},${countryCode}&appid=${utils_1.API_KEY}&units=imperial`;
    axios_1.default.get(url)
        .then(response => {
        if (response.status === 200) {
            if (locationName === response.data.name) {
                currentTime_1.getCurrentTime(locationName);
                let weather = {
                    main: response.data.weather[0].main,
                    description: response.data.weather[0].description
                };
                console.log(weather);
            }
        }
    })
        .catch(error => {
        let errorMessage = {
            message: error.message
        };
        console.log(errorMessage);
    });
};
exports.logCurrentTimeAndWeather = logCurrentTimeAndWeather;
