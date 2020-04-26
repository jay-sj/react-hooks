/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-24 09:56:11
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-24 13:26:48
 */
import React from "react";
import TodoItem from "./TodoItem";
// 检查传来的参数是否满足要求
import PropTypes from "prop-types";

const Todos = ({ todos, markCompleted, deleteItem }) => {
  return (
    <div>
      {todos
        .sort((a, b) => a.completed - b.completed)
        .map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              markCompleted={markCompleted}
              deleteItem={deleteItem}
              todo={todo}
            />
          );
        })}
    </div>
  );
};
// Todos.PropTypes = {
//   todos: PropTypes.array.isRequired,
//   markCompleted: PropTypes.func.isRequired,
//   deleteItem: PropTypes.func.isRequired,
// };
// Todos.PropTypes = {
//   todos: PropTypes.array.isRequired,
//   markCompleted: PropTypes.func.isRequired,
//   deleteItem: PropTypes.func.isRequired,
// };
export default Todos;
