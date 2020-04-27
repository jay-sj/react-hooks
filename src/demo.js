/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-27 13:09:56
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-27 18:33:54
 */
import React, { Component } from "react";
import List from "./list";
class Xiaojiejie extends Component {
  //js的构造函数，由于其他任何函数执行
  constructor(props) {
    super(props); //调用父类的构造函数，固定写法
    this.state = {
      inputValue: "", //input的值
      list: ["面包", "牛奶"], //服务列表
    };
  }
  // componentWillMount() {
  //   console.log("componentWillMount-------组件将要挂载到页面的时刻");
  // }
  // componentDidMount() {
  //   console.log("componentDidMount-------组件挂载完成的时刻");
  // }
  // shouldComponentUpdate() {
  //   console.log("1-shouldComponentUpdate-------在组件更新之前执行");
  //   // 必须返回 Boolean值;为true时继续执行,为false时不执行下去
  //   return true;
  // }
  // componentWillUpdate() {
  //   console.log("2-componentWillUpdate-------在组件更新时执行");
  //   // 必须返回 Boolean值;为true时继续执行,为false时不执行下去
  //   return true;
  // }
  // componentDidUpdate() {
  //   console.log("4-componentDidUpdate-------在组件更新结束后执行");
  // }
  render() {
    // console.log("3-render-------组件挂载中");
    return (
      <div>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          {/* 箭头函数写法 */}
          <button onClick={() => this.addList()}>增加食物</button>
          {/* <button onClick={this.addList.bind(this)}>增加食物</button> */}
        </div>
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          {this.state.list.map((item, index) => {
            return (
              // <li onClick={this.deleteItem.bind(this,index)} key={index + item}>{item}</li>
              // <li onClick={() => this.deleteItem(index)} key={index + item}>
              //   {item}
              // </li>
              // 父组件传给子组件
              <List
                key={index + item}
                content={item}
                index={index}
                deleteItem={() => this.deleteItem()}
              />
            );
          })}
        </ul>
      </div>
    );
  }
  inputChange(e) {
    //   console.log(e.target.value);
    // react赋值要用setState
    this.setState({
      inputValue: e.target.value,
    });
  }
  //  增加列表
  addList() {
    // if (this.state.inputValue !== "") {
    // setState是异步的，所以第二个参数在执行结束后触发
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      },
      () => {
        // 上面执行结束后触发
        console.log(this.ul.querySelectorAll("li").length);
      }
    );

    // } else {
    //   console.log("input不得为空");
    // }
  }
  //   删除列表项
  deleteItem(index) {
    let _list = this.state.list;
    _list.splice(index, 1);
    this.setState({
      list: _list,
    });
  }
}
export default Xiaojiejie;
