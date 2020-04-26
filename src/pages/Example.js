/*
 * @Description: useReducer学习
 * @Autor: 神曲
 * @Date: 2020-04-23 18:57:34
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 14:04:12
 */
// useReducer
import React, { useReducer } from "react";
function ReducerDemo() {
  // useReducer一般传2个值，第一个是需要传的，第二个是初始值。
  // dispatch是要传的值
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  }, 0);
  return (
    <div>
      <h2>现在的分数是：{count}</h2>
      <button onClick={() => dispatch('add')}>加</button>
      <button onClick={() => dispatch("sub")}>减</button>
    </div>
  );
}
export default ReducerDemo;
