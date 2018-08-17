import React from 'react';
import Drumpad from './Drumpad';
import Display from './Display';
import drumpadList, { getAudioSource } from '../drumpadList';

class DrumMachine extends React.Component {
  handleClick = (event) => {
    //only execute when the target is a button
    if(event.target.tagName === 'BUTTON') {
      //get inner text of the <kbd> element to find the display name
      const keyClicked = [...event.target.childNodes]
        .filter(children => (children.tagName === 'KBD')
        )[0].innerText;
      //find the display name
      const audioSource = getAudioSource(keyClicked);

      //update display
      this.props.setDisplayName(audioSource);
    };
  }

  render() {
    return (
      <section className="drum-machine">
        <div className="drum-machine__wrapper">
          
          <Display displayName={this.props.displayName} />

          <ol 
            className="drumpads"
            onClick={this.handleClick}>
            {drumpadList.map(drumpad => (
              <Drumpad 
                key={drumpad.key}
                buttonKey={drumpad.key}
                audioSource={drumpad.audioSource} />))}
          </ol>
        </div>
      </section>
    );
  }
}

export default DrumMachine;