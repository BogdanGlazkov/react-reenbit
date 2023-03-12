import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Card.module.css';

const Card = ({ info }) => {
  const navigate = useNavigate();
  const { id, name, image, species } = info;

  return (
    <div className={s.card} onClick={() => navigate(`/character/${id}`)}>
      <img className={s.image} src={image} alt={name} />
      <div className={s.wrapper}>
        <h2 className={s.title}>{name}</h2>
        <p className={s.text}>{species}</p>
      </div>
    </div>
  );
};

export default Card;
