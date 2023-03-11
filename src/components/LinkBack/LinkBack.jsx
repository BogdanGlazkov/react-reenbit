import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import s from './LinkBack.module.css';

const LinkBack = () => {
  const location = useLocation();
  //   const from = location.state.from;
  return (
    <div className={s.wrapper}>
      <Link to={location.state?.from ?? '/'}>
        <BiLeftArrowAlt
          width="24"
          height="24"
          aria-label="back"
          color="black"
        />
      </Link>
      <p className={s.text}>Go back</p>
    </div>
  );
};

export default LinkBack;
