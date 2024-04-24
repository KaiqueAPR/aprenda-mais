import React from 'react'
import SideTitle from '../../components/SideTitle/SideTitle'

import { Link } from 'react-router-dom'

import '../Login/login.css'

import { IoHelpCircle } from "react-icons/io5";

const Login = () => {
  return (
    <div className='login-page'>
      <SideTitle />
      <section className='login-container'>
        <div className='login-box'>
          <div className='login-box-header'>
            <IoHelpCircle className='help-icon' />
          </div>
          <h3>Login</h3>
          <form action="" id='login-form'>
            <div className="login-form-group">
              <div>
                <label htmlFor="usuario">Usuário</label>
              </div>
              <input
                type="text"
                name="usuario"
                className="login-form-input"
                placeholder='Insira o email ou telefone'
                required
              />
            </div>
            <div className="login-form-group">
              <div>
                <label htmlFor="senha">Senha</label>
              </div>
              <input
                type="password"
                name="senha"
                className="login-form-input"
                placeholder='Insira sua senha'
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