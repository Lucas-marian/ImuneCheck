import { Link } from 'react-router-dom';
import './RecuperacaoSenha.css'; 

function RecuperacaoSenha(){
    return(
        <div className="container">
        <div className='container-central'>
          <h1 className='titulo-recuperacao'>Recuperar</h1>

          <label className='label3-1'>Senha nova</label>
        
            <input
              type="text"
              placeholder='Senha nova'
              className='input-senha-nova'
            />

        <label className='label4-2'>Senha</label>
        
        <input
          type="text"
          placeholder='Digite de novo'
          className='input-senha-nova2'
        />

          <button className="botao-recuperar"><Link to='/login'>Redefinir</Link></button>
  
        </div>
      </div>
    )    
}

export default RecuperacaoSenha


