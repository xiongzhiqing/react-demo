/*
 * @Author: xiongzhiqing@everjiankang.com
 * @Date: 2020-06-12 10:07:12
 * @Last Modified by: xiongzhiqing@everjiankang.com
 * @Last Modified time: 2020-06-12 10:56:57
 */
import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
  render () {
    console.log('Navbar render')
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="warp">
            <span className="title">NAVBAR</span>
            <span className="badge badge-pill badge-primary ml-2 mr-2">
              {this.props.total}
            </span>
            <button
              onClick={this.props.onReset}
              className="btn btn-outline-success my-2 my-sm-0 fr" type="button">
              Reset
            </button>
          </div>
        </div>

      </nav>
    )
  }
}

export default NavBar