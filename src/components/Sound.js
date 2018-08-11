import React, { Component } from "react";


class Sound extends Component {
  soundRef = React.createRef();

  playSound = () => {
    //play the sound on button click in the drumpad
    const audio = this.soundRef.current;

    audio.volume = 1;
    audio.play();
  }

  render() {
    return (
      <audio 
        ref={this.soundRef}>
        <source src={this.props.source} type="audio/mpeg" />
        Sorry, <code>audio</code> HTML tag isn't available in your browser.
      </audio>
    );
  }
}

export default Sound;
