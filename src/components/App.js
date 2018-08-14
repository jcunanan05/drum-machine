import React from 'react';
import Drumpad from './Drumpad';
import drumpadList from '../drumpadList';

//rewrite my app from scratch and start with the simple before making it to components

class App extends React.Component {
  state = {
    keyPressed: ''
  }

  componentDidMount() {
    //add keyDown listener for the drumpad
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleDrumClick(event) {
    //filter the child elements to audio element
    // 1. put the childNodes into an array
    // 2. know if the childNode is an audio element
    // 3. filter the array and fetch the first index
    const audio = [...event.target.childNodes]
      .filter(childNode => (childNode.nodeName === 'AUDIO')
    )[0];

    //play audio
    this.playSound(audio);
  }

  playSound(audio) {
    //play only if audio exists
    if(audio) {
      audio.currentTime = 0; //rewind it first
      audio.play();
    }
  }

  handleKeyDown = (event) => {
    //get key press character from keyDown
    const keyPressed = String.fromCharCode(event.keyCode);

    //update the state
    this.setState({ keyPressed });
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
              Drum Patch Sound
            </section>
          </header>

          <ol className="drumpads">
            {drumpadList.map(drumpad => (
              <Drumpad 
                key={drumpad.key}
                buttonKey={drumpad.key}
                audioSource={drumpad.audioSource}
                keyPressed={this.state.keyPressed}
                onDrumClick={event => {this.handleDrumClick(event)}} />))}
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