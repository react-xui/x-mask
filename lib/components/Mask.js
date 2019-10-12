'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * Created with Visual Studio Code.
                                                                                                                                                                                                                                                                   * github: https://github.com/React-xui/x-seed
                                                                                                                                                                                                                                                                   * User: 田想兵
                                                                                                                                                                                                                                                                   * Date: 2017-05-14
                                                                                                                                                                                                                                                                   * Time: 20:00:00
                                                                                                                                                                                                                                                                   * Contact: 55342775@qq.com
                                                                                                                                                                                                                                                                   */

// import Style from './_Seed'; 


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xDialog = require('x-dialog');

var _xDialog2 = _interopRequireDefault(_xDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mask = {
  defaultOptions: { content: _react2.default.createElement(
      'div',
      null,
      'loading'
    ), mask: false },
  setDefaultOptions: function setDefaultOptions(opts) {
    _extends(this.defaultOptions, opts);
  },

  cache: [],
  show: function show(opts) {
    var _this = this;

    opts = _extends({}, this.defaultOptions, { buttons: false, maskHide: false, className: 'x-mask' }, opts);
    console.log(opts);
    var f = void 0;
    _xDialog2.default.show(opts)(function (m) {
      _this.cache.push(m);
      f && f(m);
    });
    return function (t) {
      f = t;
    };
  },
  hide: function hide() {
    var m = this.cache.pop();
    m && m.hide();
  }
};
exports.default = Mask;
// export default class Seed extends Component {
//   render () {
//     console.log(123)
//     return (

//     );
//   }
// }