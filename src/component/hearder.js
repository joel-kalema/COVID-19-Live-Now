import React from 'react';
import './componets.css';
import { RiVirusFill } from 'react-icons/ri';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { BiMicrophone } from 'react-icons/bi';

const Header = () => (
  <div className="header">
    <h1>
      Fight Covid-19
      {' '}
      <span><RiVirusFill className="user-icon" /></span>
    </h1>
    <div className="setings">
      <BiMicrophone />
      <MdOutlineSettingsSuggest />
    </div>
  </div>
);

export default Header;
