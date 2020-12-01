import {getCurrentTime} from '../scripts/currentTime'
import { expect } from 'chai'

describe('weather', () => {

    it('should take in two parameters', () => {
        let locationName,
            testGetCurrentTime = getCurrentTime(locationName)
        
        expect(testGetCurrentTime).to.be.undefined;

    })
})

//testGetCurrentTime.getCurrentTime(currentTime)).to.be.a('string'