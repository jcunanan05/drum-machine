import React from 'react';

const Display = (props) => {

  return (
    <section
      id="display" 
      className="display">
      Sound: { props.soundName }
    </section>
  );
}

export default Display;