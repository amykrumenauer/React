//2 - Faça um título com o texto "Balacobaco" aparecer e desaparecer com o clique de um botão.
import React, { useState } from 'react';

export default function AparecaDesapareca() {
    const [eVisivel, seteVisivel] = useState(false);

    const toggleVisibility = () => {
        seteVisivel(prev => !prev);
    };

    return (
        <>
            <h1>Titulo</h1>
            <button onClick={toggleVisibility}>
                {eVisivel ? 'Esconder' : 'Mostrar'} texto
            </button>
            {eVisivel && <h2>Balacobaco</h2>}
        </>
    );
}

