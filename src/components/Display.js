import React from 'react';
import Header from './Header';

const Display = (props) => {

  return (
    <section
      id="display" 
      className="display">
      <Header text="Drum Machine!" />
      Sound: { props.soundName }
    </section>
  );
}

export default Display;