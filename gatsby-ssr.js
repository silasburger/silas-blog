import React from 'react';

export const wrapRootElement = ({ element }) => {
  return (
    <div className="wrap-root">
      {element}
    </div>
  );
};
