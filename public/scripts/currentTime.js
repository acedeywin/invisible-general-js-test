"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTime = void 0;
const utils_1 = require("./utils");
const axios_1 = __importDefault(require("axios"));
axios_1.default.defaults;
const getCurrentTime = (locationName) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${utils_1.API_KEY}`;
    axios_1.default.get(url)
        .then(response => {
        if (response.status === 200) {
            let time = new Date(response.data.dt), hours = time.getHours(), minutes = time.getMinutes(), currentTime = '';
            switch (true) {
                case minutes < 10:
                    minutes = `0${minutes}`;
                    break;
                case hours === 12:
                    currentTime = `12:${minutes} PM`;
                    break;
                case hours > 12:
                    currentTime = `${hours - 12}:${minutes} PM`;
                    break;
                case hours === 0:
                    currentTime = `12:${minutes} AM`;
                    break;
                default:
                    currentTime = `${hours}:${minutes} AM`;
                    break;
            }
            console.log(currentTime);
        }
    })
        .catch(error => {
        let errorMessage = {
            message: error.message
        };
        console.log(errorMessage);
    });
};
exports.getCurrentTime = getCurrentTime;
