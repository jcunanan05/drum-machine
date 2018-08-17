import React from 'react';
import DrumMachine from './DrumMachine';
import Footer from './Footer';
import Header from './Header';
import { getAudioSource } from '../drumpadList';

class App extends React.Component {
  state = {
    displayName: 'start drumming!'
  }

  componentDidMount() {
    //monitor keyDown to determine the drum patch being played
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    //cleanup event listeners
    window.removeEventListener('keydown');
  }

  handleKeyDown = (event) => {
    //get string keypressed value
    const keyPressed = String.fromCharCode(event.keyCode);
    const audioSource = getAudioSource(keyPressed);

    //get audioSource and 
    this.setDisplayName(audioSource);
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
          <Header text={'Drum Machine!'} />

          <DrumMachine
            displayName={this.state.displayName}
            setDisplayName={this.setDisplayName} />
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;