import React from 'react';
import Drumpad from './Drumpad';
import drumpadList, { getAudioSource } from '../drumpadList';

//rewrite my app from scratch and start with the simple before making it to components

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="main">
          <header className="header">
            <h1 className="header__text">
              Drum Machine!
            </h1>

            <section className="display">
            </section>
          </header>

          <ol className="drumpads">
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