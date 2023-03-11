import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Card.module.css';

const Card = () => {
  const location = useLocation();

  return (
    <div className={s.card}>
      <Link to={location.state?.from ?? '/character'}>
        <img
          className={s.image}
          src={`${process.env.PUBLIC_URL}/rick.jpg`}
          alt="Rick"
        />
        <div className={s.wrapper}>
          <h2 className={s.title}>Rick Sanchez</h2>
          <p className={s.text}>Human</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
