import React, { Component } from 'react';


class Drumpads extends Component {
  componentDidUpdate() {
    // listen if the component re rendered because of the keypress in the window
    //filter the Drumpad JSX into the key pressed
    const drumpad = this.props.buttons.filter(drumpad => (
      drumpad.props.buttonKey.toLowerCase() === this.props.keyPressed
    ))[0];

    //play the sound from the filtered element
    if(drumpad) {
      console.log('drumpad found');
      console.log(drumpad);
    }
  }

  render() {
    return (
      <ol className="drumpads">
        { this.props.buttons }
      </ol>
    );
  }
}

export default Drumpads;