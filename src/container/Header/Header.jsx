import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id='home'>
    <div className="app__content app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The key to Fine dining</h1>
    </div>
    <div className="app__image"></div>
  </div>
);

export default Header;
