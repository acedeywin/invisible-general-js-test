"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("../scripts/currentTime");
const chai_1 = require("chai");
describe('weather', () => {
    it('should take in one parameter', () => {
        let locationName = '', testGetCurrentTime = currentTime_1.getCurrentTime(locationName);
        chai_1.expect(testGetCurrentTime).to.be.undefined;
    });
});
