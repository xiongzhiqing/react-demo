import React from 'react';

class WithTooltip extends React.Component {
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
      <div
        onMouseOver={this.handleOver}
        onMouseOut={this.handleOut}
      >
        {this.props.children(this.state)}
      </div>
    )
  }
}

export default WithTooltip