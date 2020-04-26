/*
 * @Description:按钮组件
 * @Autor: 神曲
 * @Date: 2020-04-26 14:20:46
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 14:52:00
 */
import React, { useContext } from "react";
import { ColorContext, UPDATE_COLOR } from "./Color";

const Buttons = () => {
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "red" });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "yellow" });
        }}
      >
        黄色
      </button>
    </div>
  );
};
export default Buttons;
