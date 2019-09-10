'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Mask = require('../components/Mask');

var _Mask2 = _interopRequireDefault(_Mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test Mask', function () {
    it('测试初始化显示', function () {
        var m = _Mask2.default.show();
        expect(document.body.querySelector('.x-mask')).not.toBeNull();
    });
});