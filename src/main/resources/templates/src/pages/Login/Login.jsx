import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Joyride from 'react-joyride';

import SideTitle from '../../components/SideTitle/SideTitle';
import '../Login/login.css';

import { IoHelpCircle } from "react-icons/io5";

const Login = () => {

  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({ login: '', password: '' });

  const handleChangeLogin = (event) => {
    const { name, value } = event.target;
    setLoginFormData(previous => ({ ...previous, [name]: value }));
  };

  useEffect(() => {
    const token = localStorage.getItem("aprendamais.token");
    if (token != null && token != "") {
      navigate("/home", { replace: true });
    }
  })

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginFormData)
    })
      .then((response) => {
        if (!response.ok) {
          swal({
            title: "Falha ao efetuar login!",
            text: "Verifique se suas credenciais estão corretas.",
            icon: "error",
            timer: 2000,
            button: false,
          });
          throw new Error('Falha ao receber usuário.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login efetuado com sucesso:', data);
        swal({
          title: "Login efetuado com sucesso!",
          text: "Você será direcionado para a plataforma de cursos.",
          icon: "success",
          timer: 2000,
          button: false,
        }).then(() => {
          localStorage.setItem("aprendamais.token", data.token)
          localStorage.setItem("aprendamais.nome", data.nome)
          navigate("/home", { replace: true });
        });
      })
      .catch((error) => {
        swal({
          title: "Falha ao efetuar login!",
          text: "Verifique se suas credenciais estão corretas.",
          icon: "error",
          timer: 2000,
          button: false,
        });
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
                name="login"
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
                name="password"
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

export default Login;
