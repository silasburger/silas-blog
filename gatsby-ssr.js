import React from 'react';
// import { GlobalStyles } from 'twin.macro'

export const wrapRootElement = ({ element }) => {
  return (
    <div className="wrap-root">
      {/* <GlobalStyles /> */}
      {element}
    </div>
  );
};