/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2019-09-09 17:33:29
 * @LastEditTime: 2020-03-26 19:59:28
 * @github: https://github.com/tianxiangbing
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Mask from '../src/index';
import '../src/_index';
Mask.setDefaultOptions({
  content: <div>加载中...</div>
});

var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  testFunc() {
    let m = Mask.show();
    setTimeout(()=>{
      Mask.hide()
    },2000) 
  }
  testFunc2(){
    Mask.show({container:document.getElementById('container'),mask:true})
  }
  componentDidMount(){
      Mask.show()(()=>{
        setTimeout(()=>{
          Mask.hide();
        },1000)
      });
  }
  hide(){
    Mask.hide();
  }
  render() {
    return (
      <div>
        <button onClick={this.testFunc.bind(this)}>测试方法</button>
        <button onClick={this.testFunc2.bind(this)}>指定容器loading</button>
        <button onClick={this.hide.bind(this)}>隐藏</button>
        <div className="container" style={{backgroundColor:'#ececec',height:'500px'}} id="container"></div>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);