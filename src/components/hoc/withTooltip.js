/*
 * @Author: xiongzhiqing@everjiankang.com
 * @Date: 2020-06-12 11:51:55
 * @Last Modified by: xiongzhiqing@everjiankang.com
 * @Last Modified time: 2020-06-12 11:52:18
 * 高阶组件
 * 1、一个函数，传入一个组件，返回一个新组建
 * 2、一般不会有UI展现
 * 3、提供一些可复用的功能
 */
import React from 'react';

const withTooltip = (Component) => {
  class HOC extends React.Component {
    state = {
      showToolTip: false,
      content: ''
    }

    handleOver = (ev) => this.setState({
      showToolTip: true,
      content: ev.target.innerText
    })

    handleOut = () => this.setState({
      showToolTip: false,
      content: ''
    })

    render () {
      return (
        <div onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          <Component action={this.state} {...this.props} />
        </div>
      )
    }
  }
  return HOC
}

export default withTooltip