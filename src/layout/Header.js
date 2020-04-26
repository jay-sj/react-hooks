/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-23 18:53:13
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-24 13:57:06
 */
import React from "react";
import { Link } from "react-router-dom";
// hooks组件
const Header = () => {
  return (
    <div style={headerStyle}>
      <h1>待办事项</h1>
      <Link to='/' style={linkStyle}>
        主页
      </Link>{" "}
      <span>|</span>{" "}
      <Link to='/about' style={linkStyle}>
        关于
      </Link>
    </div>
  );
};
// ES6写法 hooks组件
// function Header(){
//   return (
//     <div style={headerStyle}>
//       <h1>待办事项</h1>
//       <Link to='/' style={linkStyle}>
//         主页
//       </Link>{" "}
//       <span>|</span>{" "}
//       <Link to='/about' style={linkStyle}>
//         关于
//       </Link>
//     </div>
//   );
// }
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAligin: "center",
};
const linkStyle = {
  color: "#FFF",
  textDecoration: "none",
};
export default Header;
