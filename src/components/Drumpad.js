import React from 'react';

const Drumpad = (props) => (
  <li className="drumpad">
    <button className="drumpad__button">
      { props.button }
    </button>
  </li>
);

export default Drumpad;