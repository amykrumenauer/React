//1. Faça uma postagem, como no instagram. A cada like ( icone de coração ) o contador de likes deve aumentar, e quando clicar novamente, diminuir.

import React, { useState } from 'react';
import ImgGatinho from './imagens/gatinho.jpg'

export default function Postagem() {
    const [curtidas, setCurtidas] = useState(155); // curtidas use o estado inicial: 155
    const [eCoracao, setCoracao] = useState(false); // coracao

    const toggleCurtida = () => {
        setCoracao(prev => !prev); // se prev é não prev, prev resultado anterior
        setCurtidas(prev => (eCoracao ? prev - 1 : prev + 1)); // prev recebe e tem coração: se nao -1 se sim +1
    };

    return (
        <>
            <h1>Gatinhos fofos para alegrar seu dia</h1>
            <img src={ImgGatinho}/>
            <br />
            <button onClick={toggleCurtida}>
                {eCoracao ? '❤️' : '🤍'} {/* coração preenchido ou vazio */}
            </button>
            <h2>Contagem de Likes: {curtidas}</h2>
        </>
    );
}


