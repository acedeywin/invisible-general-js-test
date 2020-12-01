import {getCurrentTime} from '../scripts/currentTime'
import { expect } from 'chai'

describe('weather', () => {

    it('should take in one parameter', () => {
        let locationName = '',
            testGetCurrentTime = getCurrentTime(locationName)
        
        expect(testGetCurrentTime).to.be.undefined

    })
})