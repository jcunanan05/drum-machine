import React, { Component, Fragment } from 'react';
import Display from './Display';
import Drumpads from './Drumpads';
import Footer from './Footer';

class App extends Component {
  state = {
    keyPressed: ''
  }

  componentDidMount() {
    //listen on window to figure out drumpad press
    window.addEventListener('keypress', this.handleKeyPress)
  }

  setKeyPressed(keyPressed) {
    this.setState({
      keyPressed
    });
  }

  handleKeyPress = (e) => {
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
            keyPressed={this.state.keyPressed} />
        </main>

        <Footer />
      </Fragment>
    );
  }
}

export default App;
