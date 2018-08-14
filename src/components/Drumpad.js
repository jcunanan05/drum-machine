import React from 'react';

class Drumpad extends React.Component {
  audioRef = React.createRef();

  componentDidUpdate() {
    if(this.drumpadIsActive()) {
      // play sound if the key matches
      this.playSound();
    }
  }

  playSound() {
    const audio = this.audioRef.current;

    if(audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  drumpadIsActive() {
    //compare the key pressed and real button key
    return this.props.keyPressed.toLowerCase() === this.props.buttonKey.toLowerCase();
  }

  render() {
    return (
      <li className="drumpad">
        <button 
          className={`drumpad__button ${this.drumpadIsActive() ? 'active' : ''}`}
          onClick={this.props.onDrumClick}>
          <kbd>{ this.props.buttonKey }</kbd>

          <audio ref={this.audioRef}>
            <source src={ this.props.audioSource } type="audio/mpeg"/>
            Sorry, <code>audio</code> HTML tag isn't available in your browser.
          </audio>
        </button>
      </li>
    );
  }
}

export default Drumpad;