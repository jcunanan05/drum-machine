import React from 'react';

const Header = (props) => (
  <header className="header">
    <h1 className="header__text">
      { props.text }
    </h1>
  </header>
);

export default Header;