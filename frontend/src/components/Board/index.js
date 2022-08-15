import React, { useEffect, useState } from "react";
import "./styles.css"

var limiteSuperior = 1000;
var limiteInferior = 1;

export default function Board() {

  const [media, setMedia] = useState(Math.trunc((limiteSuperior+limiteInferior)/2));
  const [count, setCount] = useState(0);

  const handleInferior = () => {
    limiteSuperior = media;
    console.log(limiteInferior)
    console.log(limiteSuperior)
    setMedia((Math.trunc((limiteSuperior+limiteInferior)/2)))
    setCount(count + 1)
  }

  const handleSuperior = () => {
    limiteInferior = media;
    setMedia((Math.trunc((limiteSuperior+limiteInferior)/2)))
    console.log("MEDIA ->",media)
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("Limite Inferior ->", limiteInferior)
    console.log("Limite superior ->", limiteSuperior)
    console.log("MEDIA ->", media)
    console.log("CHANCES ->", count)
  }, [media])

  return (
    <div className='board'>
      <div className='board-card'>
        <span className='board-span'>Nosso palpite</span>
        <div className='board-number'>
          <span className='board-span-2'>{media}</span>
        </div>
        <div className='inline-flex'>
          <button onClick={handleInferior} className='board-button blue'>Menor</button>
          <button onClick={handleSuperior} className='board-button red'>Maior</button>
          <button onClick={() => alert("VENCEMOS!!! Foram necessárias " + count + " tentativas para encontrar seu número!")} className='board-button'>Acertou!</button>
        </div>
      </div>
    </div>
  );
}