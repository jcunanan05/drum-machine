import React, { forwardRef } from "react";

const Sound = forwardRef((props, ref) => {
  return (
    <audio 
      ref={ref}>
      <source src={props.source} type="audio/mpeg" />
      Sorry, <code>audio</code> HTML tag isn't available in your browser.
    </audio>
  );
});

export default Sound;
