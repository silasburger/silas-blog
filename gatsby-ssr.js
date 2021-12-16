import React from 'react';
import { GlobalStyles } from 'twin.macro'

export const wrapRootElement = ({ element }) => {
  return (
    <div>
      <GlobalStyles />
      {element}
    </div>
  );
};