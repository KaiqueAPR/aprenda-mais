import React from 'react'
import './signup.css'
import SideTitle from '../../components/SideTitle/SideTitle'

import { IoHelpCircle } from "react-icons/io5";


const SignUp = () => {
  return (
    <div className='signup-page'>
      <SideTitle />
      <section className='signup-container'>
        <div className='signup-box'>
          <h3>Cadastrar</h3>
          <IoHelpCircle className='help-icon'/>
          <form action="" id="signup-form" method='post'>
            <div class="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" name="nome" id="nome" className="signup-form-input" placeholder='Insira o seu nome' required />
            </div>

            <div class="form-group">
              <label htmlFor="cpf">CPF</label>
              <input type="text" name="cpf" id="cpf" className="signup-form-input" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="Digite um CPF válido no formato XXX.XXX.XXX-XX" placeholder='___.___.___-__' required />
            </div>

            <div class="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" id="senha" className="signup-form-input" placeholder='Insira sua senha' required />
            </div>

            <div class="form-group">
              <label htmlFor="ddd">DDD</label>
              <input type="text" name="ddd" id="ddd" className="signup-form-input" placeholder='Insira o DDD' pattern="\d{3}" title="Digite um DDD válido no formato DDD" required />
            </div>

            <div class="form-group">
              <label htmlFor="tel">Telefone</label>
              <input type="tel" name="tel" id="tel" className="signup-form-input" placeholder='Insira um número de telefone' required />
            </div>

            <div class="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" className="signup-form-input" placeholder='Insira um email' required />
            </div>

            <div class="form-group">
              <label htmlFor="dtNascimento">Data de Nascimento</label>
              <input type="date" name="dtNascimento" id="dtNascimento" className="signup-form-input" required />
            </div>

            <div class="form-group">
              <label htmlFor="cep">CEP</label>
              <input type="text" name="cep" id="cep" className="signup-form-input" placeholder='Insira seu CEP' required />
            </div>

            <div class="form-group">
              <label htmlFor="logradouro">Logradouro</label>
              <input type="text" name="logradouro" id="logradouro" className="signup-form-input" placeholder='Insira seu endereço' required />
            </div>

            <div class="form-group">
              <input type="submit" value="Registrar-se" className='btn-form'/>
            </div>
          </form>

        </div>
      </section>
    </div>

  )
}

export default SignUp