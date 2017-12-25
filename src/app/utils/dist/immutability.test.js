"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutability_1 = require("./immutability");
var chai = require("chai");
var expect = chai.expect;
describe('Immutability Utils', function () {
    it('should correctly deep copy', function () {
        var myObject = {
            hello: "world"
        };
        var copiedData = immutability_1.ImmutabilityUtils.deepCopy(myObject);
        expect(copiedData.hello).to.equal("world");
        copiedData.hello = "planet";
        expect(copiedData.hello).to.equal("planet");
        expect(myObject.hello).to.equal("world");
    });
});
