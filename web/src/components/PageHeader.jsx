import React from 'react';

function PageHeader(props) {
  const { name, small } = props;

  return (
    <header className="page-header">
      <h2>{name} <small>{small}</small></h2>
    </header>
  );
}

export default PageHeader;
