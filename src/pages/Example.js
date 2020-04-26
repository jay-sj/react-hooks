/*
 * @Description: useEffect副作用练习
 * @Autor: 神曲
 * @Date: 2020-04-23 18:57:34
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 11:29:44
 */
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
const Index = () => {
  useEffect(() => {
    console.log("useEffect=>老弟,你来了! Index页面");
    return () => {
      console.log("老弟，你走了！Index");
    };
  }, []);
  return <h2>首页</h2>;
};
function List() {
  useEffect(() => {
    console.log("useEffect=>老弟,你来了! List页面");
  });
  return <h2>列表页</h2>;
}
function Example() {
  const [count, setCount] = useState(0); //数组解构
  useEffect(() => {
    //useEffect功能等同于 componentDidMount组件第一次渲染、componentDidUpdate组件更新
    // 第二个参数[],可以解绑，相当于 componentWillUnmount组件销毁前执行
    console.log(`useEffect=>你点击了${count}下`);
  }, [count]);
  return (
    <div>
      <p>你点击了{count}下</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击
      </button>
      <Router>
        <ul>
          <li>
            <Link to='/'>首页</Link>
          </li>
          <li>
            <Link to='/list/'>列表</Link>
          </li>
        </ul>
        <Route path='/' exact component={Index} />
        <Route path='/list/' component={List} />
      </Router>
    </div>
  );
}
export default Example;
