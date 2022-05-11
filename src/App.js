import React from 'react';
import './App.css';

import Header from './Layout/Header';
import Main from './Layout/Main';


export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <footer className="footer mt-5"></footer>
    </React.Fragment>
  )
}