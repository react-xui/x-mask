'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Mask = require('../components/Mask');

var _Mask2 = _interopRequireDefault(_Mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { show: false };
        return _this;
    }

    _createClass(App, [{
        key: 'testFunc',
        value: function testFunc() {
            var m = _Mask2.default.show();
            setTimeout(function () {
                _Mask2.default.hide();
            }, 2000);
        }
    }, {
        key: 'testFunc2',
        value: function testFunc2() {
            // Mask.show({ container: document.getElementById('container'), mask: true })
            _reactDom2.default.createPortal(_react2.default.createElement(
                'div',
                { className: 'x-mask' },
                '222'
            ), document.body);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    { onClick: this.testFunc.bind(this) },
                    '\u6D4B\u8BD5\u65B9\u6CD5'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.testFunc2.bind(this) },
                    '\u6307\u5B9A\u5BB9\u5668loading'
                ),
                _react2.default.createElement('div', { className: 'container', style: { backgroundColor: '#ececec', height: '500px' }, id: 'container' })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

var Test = (0, _enzyme.mount)(_react2.default.createElement(App, null));

describe('Test Mask', function () {
    it('测试初始化显示', function () {
        console.log(Test);
        Test.instance().testFunc2();
        expect(document.body.querySelector('.x-mask')).toBeNull();
    });
});