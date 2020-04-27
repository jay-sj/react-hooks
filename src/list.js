/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-27 15:31:07
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-27 18:38:21
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
class List extends Component {
  // 执行条件:如果已经存在于Dom中，函数才会被执行，第一次存在dom中，不会执行
  //   componentWillReceiveProps() {
  //     console.log("child-componentWillReceiveProps------子组件接收props时执行");
  //   }
  //   componentWillUnmount(){
  //     console.log("child-componentWillUnmount------组件删除之前执行");
  //   }
  // nextProps:变化后的属性;
  // nextState:变化后的状态;
  shouldComponentUpdate(nextProps, nextState) {
    //当数据改变才执行 优化了性能
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("子组件执行了");
    return (
      // 子组件接收
      <li onClick={() => this.hendleClick()}>{this.props.content}</li>
    );
  }
  hendleClick() {
    console.log(this.props.index);
    // 调用父组件方法
    this.props.deleteItem(this.props.index);
  }
}
// 校验传值 加 isRequired必传
List.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
};
// 传默认值
// List.defaultProps={
//     content:"默认"
// }
export default List;
