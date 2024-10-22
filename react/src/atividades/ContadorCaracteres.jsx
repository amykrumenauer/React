import React, { useState } from 'react';

const ContadorCaracteres = () => {
  const [texto, setTexto] = useState(''); // '' para string

  const handleChange = (e) => {
    setTexto(e.target.value); // o target é uma referência ao objeto que enviou o evento
  };

  return (
    <div>
      <textarea 
        value={texto} 
        onChange={handleChange} 
        placeholder="Digite seu texto aqui..."
      />
      <p>Quantidade de caracteres: {texto.length}</p>
    </div>
  );
};

export default ContadorCaracteres;
