import React, { PureComponent } from "react";
import style from "./listItem.module.css";
import classnames from 'classnames/bind'
const cls = classnames.bind(style)

class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.handleDecrease = this.handleDecrease.bind(this)
  }
  doSomethingWithCount () {
    if (this.state.count <= 0) {
      this.setState({
        count: 0,
      });
    }
  }
  handleDecrease = (ev, id) => {
    this.setState({
      count: this.state.count - 1,
    });
    this.doSomethingWithCount();
    console.log("---", ev, id, this.state.count);
  };
  handleIncrease = () => {
    console.log("===");
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("step 3", this.state.count);
      }
    );
    console.log(this.state.count);
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("props", nextProps, this.props);
  //   console.log("state", nextState, this.state);
  //   if (this.state.count === nextState.count) return false;
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
            this.state.count ? "" : "themed-grid-col-a"
            }`}
        >
          <button
            onClick={(ev) => {
              this.handleDecrease(ev, this.props.data.id);
            }}
            type="button"
            className="btn btn-primary"
          >
            -
          </button>
          <span className={cls('digital')}>{this.state.count}</span>
          <button
            onClick={this.handleIncrease}
            type="button"
            className="btn btn-primary"
          >
            +
          </button>
        </div>
        <div className="col-1 themed-grid-col">
          ¥ {this.props.data.price * this.state.count}
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
