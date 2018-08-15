import React from 'react';
import Drumpad from './Drumpad';
import drumpadList, { getAudioSource } from '../drumpadList';

//rewrite my app from scratch and start with the simple before making it to components

class App extends React.Component {
  state = {
    displayName: 'start drumming!'
  }

  componentDidMount() {
    //monitor keyDown to determine the drum patch being played
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    //get string keypressed value
    const keyPressed = String.fromCharCode(event.keyCode);
    const audioSource = getAudioSource(keyPressed);

    //get audioSource and 
    this.setDisplayName(audioSource);
  }

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
      this.setDisplayName(audioSource);
    };
  }

  setDisplayName = (displayName) => {
    // set the state if displayName is valid
    if(displayName && (displayName !== this.state.displayName)) {
      this.setState({ displayName });
    }
  }

  render() {
    return (
      <React.Fragment>
        <main className="main">
          <header className="header">
            <h1 className="header__text">
              Drum Machine!
            </h1>

            <section className="display">
              <h2>{ this.state.displayName }</h2>
            </section>
          </header>

          <ol 
            className="drumpads"
            onClick={this.handleClick}>
            {drumpadList.map(drumpad => (
              <Drumpad 
                key={drumpad.key}
                buttonKey={drumpad.key}
                audioSource={drumpad.audioSource} />))}
          </ol>


          <footer className="footer">
            Copyright &copy; 2018. All Rights Reserved. Made by Jonathan Cunanan.
          </footer>
        </main>
      </React.Fragment>
    );
  }
}

export default App;