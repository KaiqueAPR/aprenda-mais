import {React, useState} from 'react'
import SideTitle from '../../components/SideTitle/SideTitle'

import { Link } from 'react-router-dom'

import '../Login/login.css'

import { IoHelpCircle } from "react-icons/io5";

const Login = () => {
  const [dadosLogin, setDadosLogin] = useState('');

  const handleChangeLogin = (event) => {
    const { name, value } = event.target;
    setDadosLogin({ ...dadosLogin, [name]: value });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/{endpoint}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosLogin)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha ao receber usuário.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login efetuado com sucesso:', data);
        // Espaço para fazermos algo com a resposta de sucesso
      })
      .catch((error) => {
        console.error('Erro ao efetuar login:', error);
      });
  };
  return (
    <div className='login-page'>
      <SideTitle />
      <section className='login-container'>
        <div className='login-box'>
          <div className='login-box-header'>
            <IoHelpCircle className='help-icon' />
          </div>
          <h3>Login</h3>
          <form onSubmit={handleSubmitLogin} id='login-form'>
            <div className="login-form-group">
              <div>
                <label htmlFor="login">Usuário</label>
              </div>
              <input
                type="text"
                name="Login"
                className="login-form-input"
                placeholder='Insira o email ou telefone'
                onChange={handleChangeLogin}
                required
              />
            </div>
            <div className="login-form-group">
              <div>
                <label htmlFor="senha">Senha</label>
              </div>
              <input
                type="password"
                name="Senha"
                className="login-form-input"
                placeholder='Insira sua senha'
                onChange={handleChangeLogin}
                required
              />
            </div>
            <p className='forgot-password'>Esqueceu a senha? <Link to={'/recuperar-senha'}>Recuperar senha</Link></p>
            <input type="submit" value="Entrar" className='login-btn-form' />
            <p className='cadastro-link'>Não tem usuário? <Link to={'/cadastro'}>Cadastre-se</Link></p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login