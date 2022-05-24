import React from 'react';
import './componets.css';
import { RiVirusFill } from 'react-icons/ri';

const Header = () => (
  <div className="header">
    <h1>
      Fight Covid-19
      {' '}
      <span><RiVirusFill className="user-icon" /></span>
    </h1>
  </div>
);

export default Header;
