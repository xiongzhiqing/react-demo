import React from "react";
const count = 0;
// 快捷键 sfc
// 函数组件（无状态组件）
// 组件内部没有this
// 没有生命周期
const ListItem = (props) => {
  return (
    <div className="row mb-3">
      <div className="col-6">{props.data.name}</div>
      <div className="col-2">¥{props.data.price}</div>
      <div className="col-2">{count}</div>
    </div>
  );
};

export default ListItem;
