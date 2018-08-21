import React from 'react';
import { removeFileExtension } from '../drumpadList';

class Drumpad extends React.Component {
  state = {
    isDrumpadActive: false
  }

  audioRef = React.createRef();

  componentDidMount() {
    //monitor keyDowns for the drumpads, adding .active classes, setting keyPressed state
    window.addEventListener('keydown', this.handleKeyDown);

    //monitor keyUp for resetting state and removing .active class for drumpads
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    //cleanup all event listeners
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }

  playSound() {
    const audio = this.audioRef.current;

    if(audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  handleKeyDown = (event) => {
    //get string keypressed value
    const keyPressed = String.fromCharCode(event.keyCode);

    //set button to active for visual effects
    if(!(keyPressed.toLowerCase() === this.props.buttonKey.toLowerCase())) return;

    this.setState({ isDrumpadActive: true });
    //play sound
    this.playSound();
  }



  handleKeyUp = () => {
    //remove active class in button on key up
    this.setState({ isDrumpadActive: false });
  }

  render() {
    return (
      <li 
        className="drum-pad"
        id={ `${removeFileExtension(this.props.audioName)}` }>
        <button 
          className={`drum-pad__button ${this.state.isDrumpadActive ? 'active' : ''}`}
          onClick={() => { this.playSound() }}>
          <kbd>{ this.props.buttonKey }</kbd>

          <audio
            id={this.props.buttonKey.toUpperCase()} 
            className="clip"
            src={this.props.audioSource}
            ref={this.audioRef}>
            <source src={this.props.audioSource} type="audio/mpeg"/>
            Sorry, <code>audio</code> HTML tag isn't available in your browser.
          </audio>
        </button>
      </li>
    );
  }
}

export default Drumpad;