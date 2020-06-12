import React from 'react';
import withTooltip from './withTooltip'

const ItemA = ({ action }) => {
  const { showToolTip, content } = action
  return (
    <div className="container">
      <button className="btn btn-primary">Tooltip A</button>

      {showToolTip && (<span className="badge badge-pill badge-primary ml-2">{content}</span>)}
    </div>
  );
}

export default withTooltip(ItemA);
