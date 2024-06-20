// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './MinhasVacinas.css';

const MinhasVacinas = () => {
  const [vacinas, setVacinas] = useState([]);
  const [novaVacina, setNovaVacina] = useState({
    nome: '',
    dataAplicacao: '',
    dataRetorno: '',
    quantidadeDoses: '',
    status: 'pendente'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaVacina({ ...novaVacina, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVacinas([...vacinas, novaVacina]);
    setNovaVacina({
      nome: '',
      dataAplicacao: '',
      dataRetorno: '',
      quantidadeDoses: '',
      status: 'pendente'
    });
  };

  return (
    <div className='container'>
      <h1>Minhas Vacinas</h1>
      <div className='vacinas-grupos'>
        <h2>Criança</h2>
        <h2>Adolescente</h2>
        <h2>Adulto</h2>
        <h2>Idoso</h2>
        <h2>Gestante</h2>
      </div>

      <form className='form-vacina' onSubmit={handleSubmit}>
        <input
          type='text'
          name='nome'
          placeholder='Nome da Vacina'
          value={novaVacina.nome}
          onChange={handleChange}
          required
        />
        <input
          type='date'
          name='dataAplicacao'
          placeholder='Data de Aplicação'
          value={novaVacina.dataAplicacao}
          onChange={handleChange}
          required
        />
        <input
          type='date'
          name='dataRetorno'
          placeholder='Data de Retorno (se necessário)'
          value={novaVacina.dataRetorno}
          onChange={handleChange}
        />
        <input
          type='number'
          name='quantidadeDoses'
          placeholder='Quantidade de Doses'
          value={novaVacina.quantidadeDoses}
          onChange={handleChange}
          required
        />
        <select
          name='status'
          value={novaVacina.status}
          onChange={handleChange}
        >
          <option value='pendente'>Pendente</option>
          <option value='ok'>Ok</option>
        </select>
        <button type='submit'>Cadastrar Vacina</button>
      </form>

      <div className='lista-vacinas'>
        {vacinas.map((vacina, index) => (
          <div key={index} className={`vacina-card ${vacina.status}`}>
            <h3>{vacina.nome}</h3>
            <p>Data de Aplicação: {vacina.dataAplicacao}</p>
            <p>Data de Retorno: {vacina.dataRetorno}</p>
            <p>Quantidade de Doses: {vacina.quantidadeDoses}</p>
            <p>Status: {vacina.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinhasVacinas;
