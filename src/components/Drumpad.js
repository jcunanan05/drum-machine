import React from 'react';
import { removeFileExtension } from '../utilities/drumpadList';
import { playSound, soundIsPlaying, soundIsEnded } from '../utilities/audio';

class Drumpad extends React.Component {
  state = {
    isDrumpadActive: false,
    isAudioPlaying: false
  }

  audioRef = React.createRef();

  componentDidMount() {
    //monitor keyDowns for the drumpads, adding .active classes, setting keyPressed state
    window.addEventListener('keydown', this.handleKeyDown);

    //monitor keyUp for resetting state and removing .active class for drumpads
    window.addEventListener('keyup', this.handleKeyUp);

    //monitor audio playing and ending
    soundIsPlaying(this.audioRef.current, (audio) => {
      // add .playing to audio
      if(!this.state.isAudioPlaying) this.setState({ isAudioPlaying: true });
    });

    soundIsEnded(this.audioRef.current, (audio) => {
      // remove .playing to audio
      if(this.state.isAudioPlaying) this.setState({ isAudioPlaying: false });

      // disable active drumpad if it isn't
      if(this.state.isDrumpadActive) this.setState({ isDrumpadActive: false });
    });
  }

  componentWillUnmount() {
    //cleanup all event listeners
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }

  handleKeyDown = (event) => {
    //get string keypressed value
    const keyPressed = String.fromCharCode(event.keyCode);

    //set button to active for visual effects
    if(!(keyPressed.toLowerCase() === this.props.buttonKey.toLowerCase())) return;

    this.setState({ isDrumpadActive: true });

    //play sound
    playSound(this.audioRef.current);
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
          onClick={() => { playSound(this.audioRef.current) }}>
          <kbd>{ this.props.buttonKey }</kbd>

          <audio
            id={this.props.buttonKey.toUpperCase()} 
            className={`clip ${this.state.isAudioPlaying ? 'playing' : ''}`}
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