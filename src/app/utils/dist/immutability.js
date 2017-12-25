"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImmutabilityUtils;
(function (ImmutabilityUtils) {
    function deepCopy(data) {
        return JSON.parse(JSON.stringify(data));
    }
    ImmutabilityUtils.deepCopy = deepCopy;
})(ImmutabilityUtils = exports.ImmutabilityUtils || (exports.ImmutabilityUtils = {}));
