import React from 'react';
import './App.scss';
import { Converter } from './Converter/Converter';
import { Header } from './Header/Header';

export const App: React.FC = () => {
  return (
    <div className="box">
      <Header />
      <Converter />
    </div>
  );
};
