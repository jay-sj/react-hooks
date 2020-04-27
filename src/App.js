/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-27 11:21:54
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-27 13:14:37
 */
// 解构赋值引入 等同于=> const Component =React.Component
import React, { Component } from "react";
import Demo from "./demo";
// function App(){
//     return <div>hooks写法</div>;
// }
class App extends Component {
  render() {
    return (
      <div>
        <Demo />
      </div>
    );
  }
}

export default App;
