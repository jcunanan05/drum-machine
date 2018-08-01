import React from 'react';
import Drumpad from './Drumpad';
import drumpadList from '../drumpadList';

const Drumpads = (props) => {

  return (
    <ol className="drumpads">
      { drumpadList.map(drumpad => {
        return (
          <Drumpad 
            key={drumpad.key}
            id={drumpad.key} 
            button={drumpad.key} />
        );
      }) }
    </ol>
  );
};

export default Drumpads;