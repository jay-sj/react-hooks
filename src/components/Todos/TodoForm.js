/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-24 11:58:37
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-24 17:07:52
 */
import React, { useState } from "react";
import { FormProvider } from "antd/lib/form/context";

const TodoForm = ({ addItem }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const submitIt = (e) => {
    e.preventDefault();
    addItem(text);
    setText("");
  };
  return (
    <form onSubmit={submitIt} style={{ display: "flex" }}>
      <input
        type='text'
        value={text}
        onChange={onChange}
        style={{ flex: "10", padding: "5px" }}
        placeholder='新的代办内容'
      />
      <input type='submit' value='添加' style={{ flex: "1" }} />
    </form>
  );
};
export default TodoForm;
