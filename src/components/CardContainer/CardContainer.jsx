import React from 'react';
import s from './CardContainer.module.css';
import Card from 'components/Card/Card';

const CardContainer = () => {
  return (
    <section className={s.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default CardContainer;
