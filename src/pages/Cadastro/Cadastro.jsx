// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUser, faEyeSlash, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
import './Cadastro.css'; 
import axios from 'axios';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://localhost:8080/api/cadastrar-usuario', {
        nome,
        password,
        email,
        cpf,
      });

      console.log('Resposta do Servidor:', response.data);

      setNome('');
      setPassword('');
      setEmail('');
      setCpf('');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div className="container">
      <div className='container-central'>
        <h1 className='titulo-cadastro'>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <label className='label'>Nome</label>
          <input
            placeholder='Nome de usuário'
            className='input-nome'
            maxLength={40}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <FontAwesomeIcon icon={faUser} className="icone2" />

          <label className='label2'>Gmail</label>
          <input
            type="text"
            placeholder='Gmail'
            className='input-gmail1'
            maxLength={27}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon icon={faEnvelope} className="icone3" />

          <label className='label3'>Senha</label>
          <input
            placeholder='Senha'
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-senha'
            maxLength={21}
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            className="icone1"
            onClick={togglePasswordVisibility}
          />

          <label className='label4'>CPF</label>
          <input
            type="text"
            placeholder='CPF'
            className='input-cpf'
            maxLength={11}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <FontAwesomeIcon icon={faIdCard} className="icone4" />

          <button type="submit" className="botao-cadastro">Cadastrar</button>
        </form>

        <p className='link'><Link to='/login'>Já possui conta? Aperte aqui!</Link></p>
      </div>
    </div>
  );
}

export default Cadastro;
