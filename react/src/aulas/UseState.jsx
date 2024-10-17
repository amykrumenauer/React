import { useState } from 'react';
import './UseStateC.css'

export default function Name() {
  const [name, setName] = useState(true);
  const [theme, setTheme] = useState(true);

  return (
    <>

    <button onClick={() => setTheme(theme ? false : true)}>Mudar de modo claro/escuro</button>
    {theme ?
    <div className='fundo-preto'>
        <h1>Nome: {name}</h1>
        <input type="text" onChange={(e) => setName (e.target.value)} />
    </div>

    : <div className='fundo-branco'>
        <h1>Nome: {name}</h1>
        <input type="text" onChange={(e) => setName (e.target.value)} />
    </div>}
    </>
  );
}