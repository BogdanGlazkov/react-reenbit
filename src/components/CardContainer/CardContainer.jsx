import React, { useState, useEffect } from 'react';
import { HiSearch } from 'react-icons/hi';
import Card from 'components/Card/Card';
import { getCharacters } from 'services/charactersService';
import s from './CardContainer.module.css';

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');

  const onInputChange = e => {
    setQuery(e.target.value);
    setCharacters(
      characters.filter(el =>
        el.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    console.log(query);
  };

  useEffect(() => {
    setStatus('pending');
    getCharacters()
      .then(res => setCharacters(res))
      .then(setStatus('resolved'))
      .catch(() => setStatus('rejected'));
    // if (query) {
    //   setStatus('pending');
    // .then(res => {
    //   if (!res.length) {
    //     setStatus('idle');
    //     setCharacters([]);
    //     return;
    //   }
    //   setStatus('resolved');
    //   setCharacters(() => res);
    // })
    // .catch(() => setStatus('rejected'));
    // }
  }, []);

  return (
    <>
      {status === 'pending' && <h2>Downloading...</h2>}
      {status === 'rejected' && <h2>Something went wrong...</h2>}
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
          onChange={onInputChange}
          autoFocus
          value={query}
          placeholder="Filter by name..."
        />
      </form>

      <section className={s.container}>
        {!characters.length
          ? null
          : characters.map(el => <Card key={el.id} info={el} />)}
      </section>
    </>
  );
};

export default CardContainer;
