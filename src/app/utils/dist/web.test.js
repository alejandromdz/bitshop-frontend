"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_1 = require("./web");
var chai = require("chai");
var expect = chai.expect;
describe('Web Utils', function () {
    it('should combine urls as expected', function () {
        expect(web_1.WebUtils.urlJoin('http://example.com', 'a')).to.equal('http://example.com/a');
        expect(web_1.WebUtils.urlJoin('http://example.com/', '/a')).to.equal('http://example.com/a');
        expect(web_1.WebUtils.urlJoin('/', '/blabla')).to.equal('/blabla');
        expect(web_1.WebUtils.urlJoin('/root/', '/blabla')).to.equal('/root/blabla');
        expect(web_1.WebUtils.urlJoin('/root/beer', '/blabla')).to.equal('/root/beer/blabla');
    });
});
