import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Character from '../pages/Character/Character';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/character/:id" element={<Character />} />
    </Routes>
  );
};

export default App;
