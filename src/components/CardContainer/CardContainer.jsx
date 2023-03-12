import React, { useState, useEffect } from 'react';
import Card from 'components/Card/Card';
import { getCharacters } from 'services/charactersService';
import s from './CardContainer.module.css';

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getCharacters().then(res => setCharacters(res));

    if (query) {
      setStatus('pending');

      getCharacters()
        .then(res => {
          if (!res.length) {
            setStatus('idle');
            setCharacters([]);
            return;
          }
          setStatus('resolved');
          setCharacters(() => res);
        })
        .catch(() => setStatus('rejected'));
    }
  }, [query]);

  return (
    <>
      {status === 'pending' && <h2>Downloading...</h2>}
      {status === 'rejected' && <h2>Something went wrong...</h2>}
      <section className={s.container}>
        {!characters.length
          ? null
          : characters.map(el => <Card key={el.id} info={el} />)}
      </section>
    </>
  );
};

export default CardContainer;
