import React from 'react';
import "./styles.css"

export default function Header() {
  return (
    <header className="header">
      <h1 className='header-h1'>Number Guessing</h1>
      <p className='header-p'>       
        Pense em um número de 1 a 1000. Vamos adivinhar o seu número em 10 chances!
      </p>
  </header>
  );
}