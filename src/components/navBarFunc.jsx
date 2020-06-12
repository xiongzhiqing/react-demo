/*
 * @Author: xiongzhiqing@everjiankang.com
 * @Date: 2020-06-12 10:06:55
 * @Last Modified by:   xiongzhiqing@everjiankang.com
 * @Last Modified time: 2020-06-12 10:06:55
 * 无状态组件
 */
import React from 'react';

const NavBar = ({ total, onReset }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="warp">
          <span className="title">NAVBAR</span>
          <span className="badge badge-pill badge-primary ml-2 mr-2">
            {total}
          </span>
          <button
            onClick={onReset}
            className="btn btn-outline-success my-2 my-sm-0 fr" type="button">
            Reset
            </button>
        </div>
      </div>

    </nav>
  );
}

export default NavBar