/*
 * @Description:自定义hooks函数
 * @Autor: 神曲
 * @Date: 2020-04-26 14:22:09
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-27 10:17:40
 */
import React, { useState, useEffect, useCallback } from "react";
// 起名 必须要用use开头
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  // useCallback缓存整个方法
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  // 使用useEffect代替生命周期,监听窗口变化
  useEffect(() => {
    window.addEventListener("resize", onResize);
    // 取消监听
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  // 只需要他执行一遍，所以第二个参数放个空数组

  return size;
}
function Index() {
  const size = useWinSize();
  return (
    <div>
      页面Size:{size.width}X{size.height}
    </div>
  );
}
export default Index;
