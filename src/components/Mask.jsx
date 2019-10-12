/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-seed
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
// import Style from './_Seed'; 
import Dialog from 'x-dialog';
const Mask = {
  defaultOptions: { content: <div>loading</div>, mask: false },
  setDefaultOptions(opts) {
    Object.assign(this.defaultOptions, opts);
  },
  cache: [],
  show(opts) {
    opts = { ...this.defaultOptions, ...{ buttons: false, maskHide: false, className: 'x-mask' }, ...opts }
    console.log(opts)
    let f;
    Dialog.show(opts)(m => {
      this.cache.push(m);
      f && f(m)
    });
    return (t) => {
      f = t;
    };
  },
  hide() {
    let m = this.cache.pop();
    m && m.hide();
  }
}
export default Mask;
// export default class Seed extends Component {
//   render () {
//     console.log(123)
//     return (

//     );
//   }
// }
