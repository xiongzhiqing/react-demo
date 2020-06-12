/*
 * @Author: xiongzhiqing@everjiankang.com
 * @Date: 2020-06-12 10:07:15
 * @Last Modified by: xiongzhiqing@everjiankang.com
 * @Last Modified time: 2020-06-12 10:57:51
 * 状态提升
 */
import React, { PureComponent } from 'react';
import ListItem from './listItem'

class ListPage extends PureComponent {
  state = {
    init: 'hello'
  }

  renderList () {
    // if (this.state.listData.length === 0) {
    //   return <div className="container">购物车是空的</div>
    // }
    return this.props.data.map((item, index) => {
      return (
        <ListItem
          key={item.id}
          data={item}
          index={index}
          onDelete={this.props.handleDelete}
          onIncrease={this.props.handleIncrease}
          onDecrease={this.props.handleDecrease} />
      )
    })
  }

  render () {
    console.log('ListPage - rendering')
    return (
      <div className="container">
        {/* <button onClick={this.handleReset} className="btn btn-primary">重置</button> */}
        {this.state.init}
        {this.props.data.length === 0 && <div className="text-center">购物车是空的</div>}
        {this.renderList()}
      </div>
    );
  }
}

export default ListPage;