import React, { useState, useEffect } from 'react';
import { HiSearch } from 'react-icons/hi';
import Card from 'components/Card/Card';
import { getCharacters } from 'services/charactersService';
import s from './CardContainer.module.css';

const CardContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [status, setStatus] = useState('idle');

  const onInputChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setStatus('pending');
    getCharacters()
      .then(res => {
        setCharacters(res);
        setFilteredCharacters(res);
      })
      .then(setStatus('resolved'))
      .catch(() => setStatus('rejected'));

    if (!localStorage.getItem('query')) {
      localStorage.setItem('query', '');
    }
  }, []);

  useEffect(() => {
    if (characters.length) {
      const filtered = characters.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCharacters(filtered);
      localStorage.setItem('query', query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
        {!filteredCharacters.length
          ? null
          : filteredCharacters.map(el => <Card key={el.id} info={el} />)}
      </section>
    </>
  );
};

export default CardContainer;
