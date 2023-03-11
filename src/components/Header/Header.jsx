import React from 'react';
import { HiSearch } from 'react-icons/hi';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.container}>
      <img
        className={s.logo}
        src={`${process.env.PUBLIC_URL}/logoRick.png`}
        alt="Rick and Morty"
      />
      <form className={s.form}>
        <HiSearch
          width="24"
          height="24"
          aria-label="search"
          color="rgba(0, 0, 0, 0.54)"
        />
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          onChange={() => {}}
          autoFocus
          // value={1}
          placeholder="Filter by name..."
        />
      </form>
    </div>
  );
};

export default Header;
