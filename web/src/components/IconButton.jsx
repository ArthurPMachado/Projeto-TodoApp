import React from 'react';
import If from '../helper/If';

function IconButton(props) {
  const {
    hide, styleProps, onClick, icon,
  } = props;

  return (
    <If test={!hide}>
      <button
        type="button"
        className={`btn btn-${styleProps}`}
        onClick={onClick}
      >
        <i className={`fa fa-${icon}`} />
      </button>
    </If>
  );
}

export default IconButton;
