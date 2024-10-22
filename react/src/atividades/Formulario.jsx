import React, { useState } from 'react';

const Formulario = () => {
  const [usuarios, setUsuarios] = useState([]); 
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: ''
  }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formData]);
    setFormData({ nome: '', email: '', idade: '' }); // limpa o formulário
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="nome" 
          placeholder="Nome" 
          value={formData.nome} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          type="number" 
          name="idade" 
          placeholder="Idade" 
          value={formData.idade} 
          onChange={handleChange} 
        />
        <button type="submit">Registrar</button>
      </form>

      <h2>Usuários Registrados:</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario.nome} - {usuario.email} - {usuario.idade} anos</li>
        ))}
      </ul>
    </div>
  );
};

export default Formulario;
