import React from 'react';
import WithTooltip from './withTooltipChildren'

const ItemD = () => {
  return (
    <div className="container">
      <WithTooltip>
        {
          ({ showToolTip, content }) => (
            <div>
              <button className="btn btn-primary">Tooltip D</button>
              {showToolTip && (<span className="badge badge-pill badge-primary ml-2">{content}</span>)}
            </div>
          )
        }
      </WithTooltip>
    </div >
  );
}

export default ItemD;
