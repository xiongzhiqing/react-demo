import React, { PureComponent } from "react";
import style from "./listItem.module.css";
import classnames from 'classnames/bind'
const cls = classnames.bind(style)

class ListItem extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: this.props.data.value || 0,
  //   };
  //   // this.handleDecrease = this.handleDecrease.bind(this)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("props", nextProps, this.props);
  //   console.log("state", nextState, this.state);
  //   if (this.props.data.value === nextState.count) return false;
  //   return true;
  // }
  render () {
    console.log("item is rendering");
    return (
      <div className={`row mb-3 ${this.props.index % 2 === 0 ? "single" : ""}`}>
        {/* <div className="col-6 themed-grid-col" style={{ color: "red" }}> */}
        <div className="col-5 themed-grid-col">
          <span className={cls('title', 'list-title')}>{this.props.data.name}</span>
        </div>
        <div className="col-2 themed-grid-col">¥{this.props.data.price}</div>
        <div
          className={`col-2 themed-grid-col ${
            this.props.data.value ? "" : "themed-grid-col-a"
            }`}
        >
          <button
            onClick={() => {
              this.props.onDecrease(this.props.data.id);
            }}
            type="button"
            className="btn btn-primary"
          >
            -
          </button>
          <span className={cls('digital')}>{this.props.data.value}</span>
          <button
            onClick={() => this.props.onIncrease(this.props.data.id)}
            type="button"
            className="btn btn-primary"
          >
            +
          </button>
        </div>
        <div className="col-1 themed-grid-col">
          ¥ {this.props.data.price * this.props.data.value}
        </div>
        <div className="col-1 themed-grid-col">
          <button
            onClick={() => this.props.onDelete(this.props.data.id)}
            type="button"
            className="btn btn-danger btn-sm"
          >
            删除
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
