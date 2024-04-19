import React from 'react'
import './signup.css'
import SideTitle from '../../components/SideTitle/SideTitle'
import CustomInput from '../../components/CustomInput/CustomInput';

import { IoHelpCircle } from "react-icons/io5";


const SignUp = () => {
  return (
    <div className='signup-page'>
      <SideTitle />
      <section className='signup-container'>
        <div className='signup-box'>
          <h3>Cadastrar</h3>
          <IoHelpCircle className='help-icon' />
          <form action="" id="signup-form" method='post'>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" name="nome" id="nome" className="signup-form-input" placeholder='Insira o seu nome' required />
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <CustomInput
                limit={11}
                InputName={"cpf"}
                InputPattern={"[0-9]{11}"}
                InputTitle={"Digite um CPF válido no formato XXXXXXXXXXX"}
                InputPlaceholder={"Insira o seu CPF"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" id="senha" className="signup-form-input" placeholder='Insira sua senha' required />
            </div>

            <div className="form-group">
              <label htmlFor="ddd">DDD</label>
              <CustomInput
                limit={3}
                InputName={"ddd"}
                InputPattern={"[0-9]{3}"}
                InputTitle={"Digite um DDD válido no formato XXX"}
                InputPlaceholder={"Insira o DDD"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tel">Telefone</label>
              <CustomInput
                limit={9}
                InputName={"tel"}
                InputPattern={"\[0-9]{9}"}
                InputTitle={"Digite um número de telefone válido no formato XXXXXXXXX"}
                InputPlaceholder={"Insira um número de telefone"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" className="signup-form-input" placeholder='Insira um email' required />
            </div>

            <div className="form-group">
              <label htmlFor="dtNascimento">Data de Nascimento</label>
              <input type="date" name="dtNascimento" id="dtNascimento" className="signup-form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="cep">CEP</label>
              <CustomInput
                limit={8}
                InputName={"cep"}
                InputPattern={"\[0-9]{8}"}
                InputTitle={"Digite um CEP válido no formato XXXXXXXX"}
                InputPlaceholder={"Insira um CEP"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="logradouro">Logradouro</label>
              <input type="text" name="logradouro" id="logradouro" className="signup-form-input" placeholder='Insira seu endereço' required />
            </div>

            <div className="form-group">
              <input type="submit" value="Registrar-se" className='btn-form' />
            </div>
          </form>

        </div>
      </section>
    </div>

  )
}

export default SignUp