import React, { Component } from 'react';
import Sound from './Sound';


class Drumpad extends Component {
  soundRef = React.createRef();

  handleClick = () => {
    //play sound inside the Sound component
    const audio = this.soundRef.current;

    audio.currentTime = 0;
    audio.play();
  }

  render() {
    const props = this.props;

    return (  
      <li className="drumpad">
        <button
          className="drumpad__button"
          onClick={this.handleClick}>
          <kbd>{ props.buttonKey }</kbd>

          <Sound
            ref={this.soundRef}
            source={props.audioSource} />
        </button>
      </li>
    );
  }
}

export default Drumpad;