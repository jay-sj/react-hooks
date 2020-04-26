/*
 * @Description:useMemo解决性能问题
 * @Autor: 神曲
 * @Date: 2020-04-26 14:22:09
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-26 16:06:17
 */
import React, { useState, useMemo } from "react";
// 父组件
function Index() {
  const [xiaohong, setXiaohong] = useState("小红待客状态");
  const [zhiling, setZhiling] = useState("志玲待客状态");
  return (
    <div>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime());
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhiling(new Date().getTime() + "志玲走来了");
        }}
      >
        志玲
      </button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </div>
  );
}
// 子组件
function ChildComponent({ name, children }) {
  function changeXiaohong(name) {
    console.log("小红来了");
    return name + ",小红向我们走来了";
  }
  // useMemo解决性能问题 防止父组件每次改变导致子组件也执行，消耗性能
  const actionXiaohong = useMemo(() => {
    changeXiaohong(name);
  }, [name]);
  // 原始写法
  // const actionXiaohong =changeXiaohong(name);
  return (
    <div>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </div>
  );
}
export default Index;
