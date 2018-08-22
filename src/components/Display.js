import React from 'react';

const Display = (props) => (
  <header className="display">
    <h2 
      className="display__title"
      id="display">{ props.displayName }</h2>
  </header>
);

export default Display;