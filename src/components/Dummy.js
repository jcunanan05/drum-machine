import React, { Component } from 'react';
import drumpadList from '../drumpadList';
import Drumpad from './Drumpad';

class Dummy extends Component {
  state = {
    keyPressed: ''
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    //know what character is clicked
    //convert to String
    const letter = String.fromCharCode(e.keyCode);

    //record the key pressed with setState, and set to lowercase
    this.setState({ keyPressed: letter.toLowerCase() });

    console.log(this.props.children); //null
  }

  render() {
    return (
      <ol>
        {drumpadList.map(drumpad => (
          <Drumpad 
            key={drumpad.key}
            id={drumpad.key}
            buttonKey={drumpad.key}
            audioSource={drumpad.audioSource} />))}>
      </ol>
    );
  }
}

export default Dummy;