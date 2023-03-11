import React from 'react';
import s from './CharacterInfo.module.css';

const CharacterInfo = () => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.picture}
        src={`${process.env.PUBLIC_URL}/rick-round.png`}
        alt="Rick"
      />
      <h2 className={s.title}>Rick Sanchez</h2>
      <div className={s.info}>
        <h3 className={s.infoTitle}>Informations</h3>
        <div className={s.infoDetails}>
          <div className={s.item}>
            <h4 className={s.subtitle}>Gender</h4>
            <p className={s.text}>Male</p>
          </div>
          <div className={s.item}>
            <h4 className={s.subtitle}>Status</h4>
            <p className={s.text}>Alive</p>
          </div>
          <div className={s.item}>
            <h4 className={s.subtitle}>Specie</h4>
            <p className={s.text}>Human</p>
          </div>
          <div className={s.item}>
            <h4 className={s.subtitle}>Origin</h4>
            <p className={s.text}>Earth (C-137)</p>
          </div>
          <div className={s.item}>
            <h4 className={s.subtitle}>Type</h4>
            <p className={s.text}>Unknown</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
