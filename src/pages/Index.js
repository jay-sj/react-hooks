/*
 * @Description:useRef用法
 * @Autor: 神曲
 * @Date: 2020-04-26 14:22:09
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 18:15:37
 */
import React, { useRef, useState, useEffect } from "react";
function Index() {
  // 1、useRef获取jsx dom
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.value = "Hello";
    console.log(inputEl);
  };
  const [text, setText] = useState("周杰伦");
  // 2、useRef保存变量
  const textRef = useRef();
  useEffect(() => {
    textRef.current = text;
    console.log("textRef.current", textRef.current);
  });
  return (
    <div>
      <input ref={inputEl} type='text' />
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br />
      <br />
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
export default Index;
