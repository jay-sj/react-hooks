/*
 * @Description:颜色组件
 * @Autor: 神曲
 * @Date: 2020-04-26 14:29:04
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 14:53:31
 */
import React, { createContext, useReducer } from "react";
export const ColorContext = createContext({});
export const UPDATE_COLOR = "UPDATE_COLOR";
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
};
export const Color = (props) => {
  // 声明一个reducer 默认值为"blue"
  const [color, dispatch] = useReducer(reducer, "blue");
  return (
    <div>
      <ColorContext.Provider value={{ color,dispatch}}>
        {props.children}
      </ColorContext.Provider>
    </div>
  );
};
