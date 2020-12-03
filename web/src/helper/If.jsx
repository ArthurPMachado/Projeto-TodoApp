import React from 'react';

function If(props) {
  const { test, children } = props;

  if (test) {
    return children;
  }

  return false;
}

export default If;
