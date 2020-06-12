import React from 'react';
import withTooltip from './withTooltip'

const ItemB = ({ action }) => {
  const { showToolTip, content } = action
  return (
    <div className="container">
      <button className="btn btn-danger">Tooltip B</button>

      {showToolTip && (<span className="badge badge-pill badge-primary ml-2">{content}</span>)}
    </div>
  );
}

export default withTooltip(ItemB);
