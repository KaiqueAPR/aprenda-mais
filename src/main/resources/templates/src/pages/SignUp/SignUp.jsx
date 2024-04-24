import { React, useState } from 'react'
import {Link} from 'react-router-dom'
import './signup.css'

import SideTitle from '../../components/SideTitle/SideTitle'
import CustomInput from '../../components/CustomInput/CustomInput';

import { IoHelpCircle } from "react-icons/io5";


const SignUp = () => {
  const [dados, setDados] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/usuario/novo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha ao enviar dados');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Dados enviados com sucesso:', data);
        // Espaço para fazermos algo com a resposta de sucesso (como passar para a tela de login)
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
      });
  };
  return (
    <div className='signup-page'>
      <SideTitle />
      <section className='signup-container'>
        <div className='signup-box'>
          <div className='box-header'>
            <Link to={'/login'}>Ir para login</Link>
            <IoHelpCircle className='help-icon' />
          </div>
          <h3>Cadastrar</h3>
          <form onSubmit={handleSubmit} id="signup-form">

            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                name="nome"
                className="signup-form-input"
                placeholder='Insira o seu nome'
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <CustomInput
                limit={11}
                InputName={"cpf"}
                InputPattern={"[0-9]{11}"}
                InputTitle={"Digite um CPF válido no formato XXXXXXXXXXX"}
                InputPlaceholder={"Insira o seu CPF"}
                HandleChangeProp={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                id="senha"
                className="signup-form-input"
                placeholder='Insira sua senha'
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="ddd">DDD</label>
              <CustomInput
                limit={2}
                InputName={"ddd"}
                InputPattern={"[0-9]{2}"}
                InputTitle={"Digite um DDD válido no formato XX"}
                InputPlaceholder={"Insira o DDD"}
                HandleChangeProp={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <CustomInput
                limit={9}
                InputName={"telefone"}
                InputPattern={"\[0-9]{9}"}
                InputTitle={"Digite um número de telefone válido no formato XXXXXXXXX"}
                InputPlaceholder={"Insira um número de telefone"}
                HandleChangeProp={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                className="signup-form-input"
                placeholder='Insira um email'
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dtNascimento">Data de Nascimento</label>
              <input
                type="date"
                name="dtNascimento"
                id="dtNascimento"
                className="signup-form-input"
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cep">CEP</label>
              <CustomInput
                limit={8}
                InputName={"cep"}
                InputPattern={"\[0-9]{8}"}
                InputTitle={"Digite um CEP válido no formato XXXXXXXX"}
                InputPlaceholder={"Insira um CEP"}
                HandleChangeProp={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="logradouro">Logradouro</label>
              <input
                type="text"
                name="logradouro"
                id="logradouro"
                className="signup-form-input"
                placeholder='Insira seu endereço'
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Registrar-se"
                className='btn-form'
              />
            </div>
          </form>

        </div>
      </section>
    </div>

  )
}

export default SignUp