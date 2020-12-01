import * as testGetWeather from '../scripts/timeAndWeather'
import { expect } from 'chai'

describe('Current time and weather', () => {

    it('should take in three parameters', () => {
        let locationName = ''
        let postalCode = ''
        let countryCode = ''
        
        expect(testGetWeather.logCurrentTimeAndWeather(locationName, postalCode, countryCode)).to.be.undefined;

    })
})