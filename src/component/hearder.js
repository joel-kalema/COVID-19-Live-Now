import React from 'react';
import './componets.css';
import { AiOutlineGlobal } from 'react-icons/ai';

const Header = () => (
  <div className="header">
    <h1>
      COVID-19 Live Now
      {' '}
      <span><AiOutlineGlobal className="user-icon" /></span>
    </h1>
  </div>
);

export default Header;
