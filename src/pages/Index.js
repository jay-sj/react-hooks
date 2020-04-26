/*
 * @Description:UI主组件-利用useReducer代替Redux
 * @Autor: 神曲
 * @Date: 2020-04-26 14:22:09
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 14:58:13
 */
import React from "react";
import ShowArea from "./showArea";
import Buttons from "./Buttons";
import { Color } from "./Color";
const Index = () => {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
};
export default Index;
