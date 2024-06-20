// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Login.css'; 

function Login() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className='container-central'>
        <h1 className='titulo-login'>Login</h1>

            <label className='label1-2'>Gmail</label>

              <input
              type="text"
              placeholder='Gmail'
              className='input-gmail1-2'
            />

            <FontAwesomeIcon icon={faEnvelope} className="icone3-1" />

            <label className='label2-2'>Senha</label>

              <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Senha'
              className='input-senha2-2'
              maxLength={21} 
            />

            <FontAwesomeIcon
               icon={passwordVisible ? faEyeSlash : faEye}
               className="icone1-1"
              onClick={togglePasswordVisibility}
            />  

        <button className="botao-login"><Link to='/home'>Logar</Link></button>

        <p className='link2'><Link to='/recuperacao'>Aperte aqui para recuperar conta</Link></p>

      </div>
    </div>
  );
}

export default Login;