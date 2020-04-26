/*
 * @Description:UI显示组件
 * @Autor: 神曲
 * @Date: 2020-04-26 14:18:10
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 14:54:02
 */
import React,{useContext} from "react";
import {ColorContext} from "./Color"
function ShowArea() {
    const {color}=useContext(ColorContext)
  return <h1 style={{ color:color }}>字体颜色为{color}</h1>;
}
export default ShowArea;
