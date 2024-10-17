//1 - Faça um contador de 10 em 10, tanto adição quanto subtração

import { useState } from 'react';

export default function Counter() {
  const [numero, setNumero] = useState(42);

  function adicione() {
    setNumero(a => a + 10);
  }

  function subtraia() {
    setNumero(a => a - 10);
  }

  return (
    <>
      <h1>Contagem: {numero}</h1>
      <button onClick={() => {
        adicione();
      }}>+10</button>
      <button onClick={() => {
        subtraia();
      }}>-10</button>
    </>
  );
}