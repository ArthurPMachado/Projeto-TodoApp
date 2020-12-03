import React from 'react';

function IconButton(props) {
  const {
    hide, styleProps, onClick, icon,
  } = props;

  if (hide) {
    return null;
  }
  return (
    <button
      type="button"
      className={`btn btn-${styleProps}`}
      onClick={onClick}
    >
      <i className={`fa fa-${icon}`} />
    </button>
  );
}

export default IconButton;
