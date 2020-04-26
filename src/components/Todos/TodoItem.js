/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-24 10:26:28
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-24 11:58:08
 */
import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, markCompleted, deleteItem }) => {
  const itemStyle = {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px dotted #ccc",
    textDecoration: todo.completed ? "line-through" : "none",
  };
  const btnStyle = {
    backgroundColor: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    float: "right",
  };
  return (
    <div style={itemStyle}>
      <p>
        {" "}
        <input
          type='checkbox'
          value={todo.completed}
          checked={todo.completed}
          onChange={() => markCompleted(todo.id)}
        />
        {todo.title}
        <button style={btnStyle} onClick={() => deleteItem(todo.id)}>
          X
        </button>
      </p>
    </div>
  );
};
// TodoItem.PropTypes = {
//   todo: PropTypes.object.isRequired,
//   markCompleted: PropTypes.func.isRequired,
//   deleteItem: PropTypes.func.isRequired,
// };
export default TodoItem;
