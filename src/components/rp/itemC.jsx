import React from 'react';
import WithTooltip from './withTooltip'

const ItemC = () => {
  return (
    <div className="container">
      <WithTooltip render={
        ({ showToolTip, content }) => (
          <div>
            <button className="btn btn-primary">Tooltip C</button>
            {showToolTip && (<span className="badge badge-pill badge-primary ml-2">{content}</span>)}
          </div>
        )
      } />
    </div >
  );
}

export default ItemC;
