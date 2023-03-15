import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from 'services/charactersService';
import s from './CharacterInfo.module.css';

const CharacterInfo = ({ info }) => {
  const [character, setCharacter] = useState([]);
  const [status, setStatus] = useState('idle');
  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    getCharacterById(id)
      .then(res => setCharacter(res))
      .then(setStatus('resolved'))
      .catch(() => setStatus('rejected'));
  }, [id]);

  return (
    <div className={s.wrapper}>
      {status === 'pending' && <h2>Downloading...</h2>}
      {status === 'rejected' && <h2>Something went wrong...</h2>}

      <img className={s.picture} src={character.image} alt={character.name} />
      <h2 className={s.title}>{character.name}</h2>
      <div className={s.info}>
        <h3 className={s.infoTitle}>Informations</h3>
        <div className={s.infoDetails}>
          <div className={s.item}>
            <h4 className={s.subtitle}>Gender</h4>
            <p className={s.text}>{character.gender}</p>
          </div>
          <div className={s.item}>
            <h4 className={s.subtitle}>Status</h4>
            <p className={s.text}>{character.status || 'unknown'}</p>
          </div>
          <div className={s.item}>
            <h4 className={s.subtitle}>Species</h4>
            <p className={s.text}>{character.species}</p>
          </div>
          <div className={s.item}>
            <h4 className={s.subtitle}>Origin</h4>
            <p className={s.text}>{character.origin?.name}</p>
          </div>
          <div className={s.item}>
            <h4 className={s.subtitle}>Type</h4>
            <p className={s.text}>{character.type ?? ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
