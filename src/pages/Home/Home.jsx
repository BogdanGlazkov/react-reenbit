import React from 'react';
import Header from 'components/Header/Header';
import CardContainer from 'components/CardContainer/CardContainer';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.container}>
      <Header />
      <CardContainer />
    </div>
  );
};

export default Home;
