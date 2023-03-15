import React from 'react';
import Login from 'components/Login/Login';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.container}>
      <Login />
      <img
        className={s.logo}
        src={`${process.env.PUBLIC_URL}/logoRick.png`}
        alt="Rick and Morty"
      />
    </div>
  );
};

export default Header;
