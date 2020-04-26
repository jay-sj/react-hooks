/*
 * @Description: 子组件接收值
 * @Autor: 神曲
 * @Date: 2020-04-26 13:19:24
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 13:42:39
 */
import React,{useContext} from "react";
// 引入父组件定义的
import {CountContext} from './Example'
// 子组件
function Counter(){
    let count =useContext(CountContext)
return(<h2>子组件：{count}</h2>)

}
export default Counter;