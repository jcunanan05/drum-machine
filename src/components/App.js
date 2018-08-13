import React, { Component, Fragment } from 'react';
import Display from './Display';
import Drumpads from './Drumpads';
import Drumpad from './Drumpad';
import Footer from './Footer';
import drumpadList from '../drumpadList';

class App extends Component {
  state = {
    keyPressed: ''
  }

  componentDidMount() {
    //listen on window to figure out drumpad press
    window.addEventListener('keydown', this.handleKeyDown)
  }

  setKeyPressed(keyPressed) {
    this.setState({
      keyPressed
    });
  }

  handleKeyDown = (e) => {
    //know what character is clicked
    //convert to String
    const letter = String.fromCharCode(e.keyCode);

    //record the key pressed with setState, and set to lowercase
    this.setKeyPressed(letter.toLowerCase());
  }

  render() {
    return (
      <Fragment>
        <main 
          id="drum-machine" 
          className="main">
          <Display soundName={'Cymbal One'} />

          <Drumpads
            setKeyPressed={this.setKeyPressed} 
            keyPressed={this.state.keyPressed}
            handleKeyDown={this.handleKeyDown}
            buttons={drumpadList.map(drumpad => (
              <Drumpad 
                key={drumpad.key}
                id={drumpad.key}
                buttonKey={drumpad.key}
                audioSource={drumpad.audioSource} />))}>
          </Drumpads>
        </main>

        <Footer />
      </Fragment>
    );
  }
}

export default App;
