# x-mask
遮罩层loading效果，可以设置`container`进行指定容器渲染。
# npm安装
```
npm install --save x-mask
```
# 代码示例
```
import Mask from 'x-mask';
let m = Mask.show();
setTimeout(()=>{
    Mask.hide()
},2000) 
```
# Api
本插件依赖于`x-dialog`插件，所有api也继承至`x-dialog`,详情请点击 [x-dialog](https://github.com/React-xui/x-dialog)
## container:htmlElement
    指定容器的dom
# 全局配置
提供`setDefaultOptions`对全局的参数进行重写
```
Mask.setDefaultOptions({
  content: <div>加载中...</div>
});
```

### 关于作者
[https://github.com/tianxiangbing](https://github.com/tianxiangbing)
