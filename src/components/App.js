import React, { Component, Fragment } from 'react';
import Header from './Header';
import Display from './Display';
import Drumpads from './Drumpads';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <main 
          id="drum-machine" 
          className="main">
          <Header text="Drum Machine!" />

          <Display soundName={'Cymbal One'} />

          <Drumpads />
        </main>

        <Footer />
      </Fragment>
    );
  }
}

export default App;
