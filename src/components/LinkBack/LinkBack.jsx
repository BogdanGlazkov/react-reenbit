import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import s from './LinkBack.module.css';

const LinkBack = () => {
  const navigate = useNavigate();

  return (
    <div className={s.wrapper} onClick={() => navigate('/')}>
      <BiLeftArrowAlt width="24" height="24" aria-label="back" color="black" />
      <span className={s.text}>Go back</span>
    </div>
  );
};

export default LinkBack;
