//3 - Faça um useState que altere o estado de uma string e exiba na tela. Quando essa string for igual a "SENAI" exba uma mensagem "Apareci!"

import React, { useState } from 'react';

const Exiba = () => {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        placeholder="Digite algo"
      />
      <p>Você digitou: {texto}</p>
      {texto === "SENAI" && <p>Apareci!</p>}
    </div>
  );
};

export default Exiba;
