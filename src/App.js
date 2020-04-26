/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-22 16:39:38
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 10:01:03
 */
import React, { Fragment, useState } from "react";
import Header from "./layout/Header";
import About from "./pages/About";
import Todos from "./components/Todos/Todos";
import TodoForm from "./components/Todos/TodoForm";
import { v4 as uuidv4 } from "uuid";
// 配置路由
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { fromJS } from "immutable";
export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "买饮料", completed: false },
    { id: 2, title: "买面包", completed: true },
    { id: 3, title: "买牛奶", completed: false },
  ]);
  const markCompleted = (id) => {
    setTodos((prevItem) => {
      return prevItem.map((item) => {
        return item.id === id
          ? { ...item, completed: !item.completed }
          : { ...item };
      });
    });
  };
  const deleteItem = (id) => {
    setTodos((prevItem) => {
      return prevItem.filter((item) => item.id !== id);
    });
  };
  const addItem = (text) => {
    setTodos((prevItem) => {
      return [...prevItem, { title: text, completed: false, id: uuidv4() }];
    });
  };
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/about' component={About} />
        <Route
          exact
          path='/'
          render={(props) => (
            <Fragment>
              <TodoForm addItem={addItem} />
              <Todos
                todos={todos}
                markCompleted={markCompleted}
                deleteItem={deleteItem}
              />
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}
