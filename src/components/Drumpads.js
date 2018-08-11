import React from 'react';
import Drumpad from './Drumpad';
import drumpadList from '../drumpadList';

const Drumpads = (props) => {
  return (
    <ol className="drumpads">
      { drumpadList.map(drumpad => (
        <Drumpad 
          key={drumpad.key}
          id={drumpad.key} 
          buttonKey={drumpad.key}
          audioSource={drumpad.audioSource} />))}
    </ol>
  );
};

export default Drumpads;