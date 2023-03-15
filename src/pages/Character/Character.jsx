import React from 'react';
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import LinkBack from '../../components/LinkBack/LinkBack';
import s from './Character.module.css';

const Character = () => {
  return (
    <div className={s.container}>
      <LinkBack />
      <CharacterInfo />
    </div>
  );
};

export default Character;
