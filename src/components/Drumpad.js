import React, { Component } from 'react';
import Sound from './Sound';


class Drumpad extends Component {
  soundRef = React.createRef();

  handleClick = () => {
    //play sound inside the Sound component
    this.soundRef.current.playSound();
  }

  render() {
    const props = this.props;

    return (
      <li className="drumpad">
        <button 
          className="drumpad__button"
          onClick={this.handleClick}>
          { props.buttonKey }

          <Sound 
            ref={this.soundRef}
            source={props.audioSource} />
        </button>
      </li>
    );
  }
}

export default Drumpad;