/*
 * @Description: useContext父子组件传值
 * @Autor: 神曲
 * @Date: 2020-04-23 18:57:34
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 13:41:43
 */
// createContext创建上下文
import React, { useState,createContext} from "react";
import Counter from './child'
export const CountContext=createContext();
// 父组件
function Example() {
  const [count, setCount] = useState(0); //数组解构
  return (
    <div>
      <p>父组件：你点击了{count}下</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击
      </button>
      {/* Provider提供器，提供需要传的值 */}
      <CountContext.Provider value={count}>
        <Counter/>
      </CountContext.Provider>
    </div>
  );
}
export default Example;
