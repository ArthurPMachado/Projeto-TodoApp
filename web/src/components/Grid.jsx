import React from 'react';

function Grid(props) {
  const { cols, children } = props;

  function handleToCssClasses(numbers) {
    const tagSize = numbers ? numbers.split(' ') : [];
    let classes = '';

    if (tagSize[0]) {
      classes += `col-xs-${tagSize[0]}`;
    }
    if (tagSize[1]) {
      classes += `col-sm-${tagSize[1]}`;
    }
    if (tagSize[2]) {
      classes += `col-md-${tagSize[2]}`;
    }
    if (tagSize[3]) {
      classes += `col-lg-${tagSize[3]}`;
    }

    return classes;
  }

  const gridClasses = handleToCssClasses(cols || 12);

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
}

export default Grid;
