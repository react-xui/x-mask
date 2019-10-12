import { shallow, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Mask from '../components/Mask';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    testFunc() {
        let m = Mask.show();
        setTimeout(() => {
            Mask.hide()
        }, 2000)
    }
    testFunc2() {
        // Mask.show({ container: document.getElementById('container'), mask: true })
        ReactDOM.createPortal(<div className="x-mask">222</div>, document.body)
    }
    render() {
        return (
            <div>
                <button onClick={this.testFunc.bind(this)}>测试方法</button>
                <button onClick={this.testFunc2.bind(this)}>指定容器loading</button>
                <div className="container" style={{ backgroundColor: '#ececec', height: '500px' }} id="container"></div>
            </div>
        )
    }
}

const Test = mount(<App />)

describe('Test Mask', () => {
    it('测试初始化显示', () => {
        console.log(Test)
        Test.instance().testFunc2();
        expect(document.body.querySelector('.x-mask')).toBeNull()
    });
});