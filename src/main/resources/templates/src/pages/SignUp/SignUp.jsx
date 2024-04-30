import './signup.css';

import CustomInput from '../../components/CustomInput/CustomInput';
import { IoHelpCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import SideTitle from '../../components/SideTitle/SideTitle';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const SignUp = () => {
  const [dados, setDados] = useState('');
  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);
  const [disableBtnVoltar, setDisableBtnVoltar] = useState(true);
  const [disableBtnSubmit, setDisableBtnSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Caso o que esteja seja o de cep e que contenha os 8 numeros , ele entra na função "buscaEndereco()"
    if (name === 'cep' && value.length === 9) {
      let cepNumber = value.replace(/\D/g, '');
      buscaEndereco(cepNumber);
    }

    if (name === 'nome') {
      if (value !== undefined && value !== '') {
        setDisableBtnVoltar(false);
        console.log(disableBtnVoltar);
      } else {
        setDisableBtnVoltar(true);
        console.log(disableBtnVoltar);
      }
    }

    setDados({ ...dados, [name]: value });
  };

  // Função que envia os dados do formulário para o backend
  const onSubmit = async (event) => {
    // event.preventDefault();
    setDisableBtnSubmit(true);
    dados.cep = dados.cep.replace(/\D/g, '');
    dados.cpf = dados.cpf.replace(/\D/g, '');
    dados.telefone = dados.telefone.replace(/\D/g, '');
    dados.ddd = dados.ddd.replace(/\D/g, '');
    

    try {
      const response = await fetch('http://localhost:8080/usuario/novo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      });

      if (!response.ok) {
        setDisableBtnSubmit(false);
        throw new Error('Falha ao enviar dados');
      }

      const data = await response.json();
      console.log('Dados enviados com sucesso:', data);
      setDisableBtnSubmit(false);

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setDisableBtnSubmit(false);
    }
  };


  const buscaEndereco = async (cep) => {

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      //  Caso haja algum erro na requisição
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }

      const jsonData = await response.json();
      const endereco = `Rua: ${jsonData.logradouro}, Bairro: ${jsonData.bairro}, Cidade: ${jsonData.localidade}, Estado: ${jsonData.uf}`;
      console.log('Endereço:', endereco);
      
      // esse setdados e diferente
      setDados(prevState => ({
        ...prevState,
        cep: prevState.cep,
        logradouro: endereco
    }));
      /*
      Em React, prevState é um parâmetro opcional em métodos de atualização de estado,
       como setState, que permite acessar o estado anterior do componente antes da atualização.
      */ 
     
    } catch (err) {
      console.error(err);
    }
    // } finally {
    //   console.log('Finalizou a busca');
    // }
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
          <form onSubmit={handleSubmit(onSubmit)} id="signup-form">

            {showForm1 ? (
              <>
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    className="signup-form-input"
                    placeholder='Insira o seu nome'
                    required
                    value={dados.nome || ''}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpf">CPF</label>
                  <CustomInput
                    limit={14}
                    InputName={"cpf"}
                    InputPattern={/[^0-9]/g}
                    InputTitle={"Digite um CPF válido no formato XXXXXXXXXXX"}
                    InputPlaceholder={"Insira o seu CPF"}
                    HandleChangeProp={handleChange}
                    InputValue={dados.cpf || ''}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ddd">DDD</label>
                  <CustomInput
                    limit={2}
                    InputName={"ddd"}
                    InputPattern={/[^0-9]/g}
                    InputTitle={"Digite um DDD válido no formato XX"}
                    InputPlaceholder={"Insira o DDD"}
                    HandleChangeProp={handleChange}
                    InputValue={dados.ddd || ''}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <CustomInput
                    limit={10}
                    InputName={"telefone"}
                    InputPattern={/[^0-9]/g}
                    InputTitle={"Digite um número de telefone válido no formato XXXXX-XXXX"}
                    InputPlaceholder={"Insira um número de telefone"}
                    HandleChangeProp={handleChange}
                    InputValue={dados.telefone || ''}
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
                    maxLength={10}
                    onChange={handleChange}
                    value={dados.dtNascimento || ''}
                  />
                </div>

                <div className="form-group">
                  <button
                    type="button"
                    disabled={disableBtnVoltar}
                    onClick={() => {
                      setShowForm1(!showForm1);
                      setShowForm2(!showForm2);
                      console.log('teste');
                    }
                    }
                    className='btn-form'
                  >
                    Proximo
                  </button>
                </div>

              </>
            ) : null}


            {showForm2 ? (
              <>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="signup-form-input"
                    placeholder='Insira um email'
                    value={dados.email || ''}
                    required
                    onChange={handleChange}
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
                    value={dados.senha || ''}
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cep">CEP</label>
                  <CustomInput
                    limit={9}
                    InputName={"cep"}
                    // InputPattern={/[^0-9]/g}
                    InputTitle={"Digite um CEP válido no formato XXXXX-XXX"}
                    InputPlaceholder={"Insira um CEP"}
                    HandleChangeProp={handleChange}
                    InputValue={dados.cep || ''}
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
                    value={dados.logradouro || ''}
                  />
                </div>

                <div className="form-group">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm1(!showForm1);
                      setShowForm2(!showForm2);
                      // console.log('teste');
                    }
                    }
                    className='btn-form btn-back'
                  >
                    Voltar
                  </button>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    disabled={disableBtnSubmit}
                    className='btn-form'
                  >{!disableBtnSubmit ? 'Cadastrar' : <span className="spinner"></span>}</button>
                </div>
              </>
            ) : null}

          </form>

        </div>
      </section>
    </div>

  )
}

export default SignUp