import './signup.css';

import { useEffect, useState } from "react";

import { CustomValidator } from '../../functions/formValidator';
import InputMask from '../../functions/inputMask';
import { IoHelpCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import SideTitle from '../../components/SideTitle/SideTitle';
import { useForm } from "react-hook-form";

const SignUp = () => {
  // const [dados, setDados] = useState({
  //   nome: 'Y',
  //   cpf: '',
  // });
  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);
  const [disableBtnVoltar, setDisableBtnVoltar] = useState(true);
  const [disableLogadouro, setDisableLogadouro] = useState(true);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);

  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    getValues,
    watch,
    setValue
  } = useForm({
    mode: "all", defaultValues: {
      nome: '',
      cpf: '',
      ddd: '',
      telefone: '',
      dtNascimento: '',
      // Part 2
      email: '',
      senha: '',
      cep: '',
      logradouro: ''
    }
  });


  useEffect(() => {
    console.log('Entrou no useEffect do tel');
    setValue('telefone', InputMask({ value: getValues('telefone'), inputName: 'telefone' }));
  }, [watch('telefone')]);

  useEffect(() => {
    console.log('Entrou no useEffect do cpf');
    setValue('cpf', InputMask({ value: getValues('cpf'), inputName: 'cpf' }));
  }, [watch('cpf')]);

  useEffect(() => {
    if (getValues('ddd') !== '') {
      setValue('ddd', InputMask({ value: getValues('ddd'), inputName: 'ddd' }), { shouldValidate: true });
    }
  }, [watch('ddd')]);



  useEffect(() => {

    console.log('o tipo e :', typeof objErrors);
    if (isDirty === true
      && verificaErrorsPage1() === false) {
      setDisableBtnVoltar(false);
    } else {
      setDisableBtnVoltar(true);
    }

    function verificaErrorsPage1() {

      let inputsList = ['nome', 'cpf', 'ddd', 'telefone', 'dtNascimento'];
      const errorsInputList = Object.keys(errors);
      let value = [];

      if (getValues('nome') !== '' &&
        getValues('cpf') !== '' &&
        getValues('ddd') !== '' &&
        getValues('telefone') !== '' &&
        getValues('dtNascimento') !== '') {

        inputsList.forEach(inputElement => {
          value.push(errorsInputList.includes(inputElement))
        });

      } else {
        value.push(true)
      }

      if (value.includes(true)) {
        return true;
      } else {
        return false;
      }

    }

    console.log('O error e : ',errors);
    console.log('O isDirty e : ', isDirty);
    console.log('O isValid e : ', isValid);
    console.log('O VALOR  e : ', getValues());

  }, [watch()]);


  const onSubmit = async (data) => {
    
    event.preventDefault();

    let body = data;
    body.cep = body.cep.replace(/\D/g, '');
    body.cpf = body.cpf.replace(/\D/g, '');
    body.telefone = body.telefone.replace(/\D/g, '');
    body.ddd = body.ddd.replace(/\D/g, '');

    setShowLoadingSpinner(true);
    
    try {
      const response = await fetch('http://localhost:8080/usuario/novo', {
        // const response = await fetch('https://webhook.site/5509b105-dfea-4f9a-94b1-30db32476782', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        setShowLoadingSpinner(false);
        throw new Error('Falha ao enviar dados');
      }

      const dataResponse = await response.json();
      console.log('Dados enviados com sucesso:', dataResponse);
      setShowLoadingSpinner(false);

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setShowLoadingSpinner(false);
    }
  };


  useEffect(() => {

    if (getValues('cep') !== '') {
      setValue('cep', InputMask({ value: getValues('cep'), inputName: 'cep' }), { shouldValidate: true });
    }
  if (getValues('cep').length === 9) {
      let cepNumber = getValues('cep').replace(/\D/g, '');
      searchAddressByCep(cepNumber);
    }

    async function searchAddressByCep(cep) {
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
        if (!jsonData.erro) { 

          const endereco = `Rua: ${jsonData.logradouro}, Bairro: ${jsonData.bairro}, Cidade: ${jsonData.localidade}, Estado: ${jsonData.uf}`;
          setValue('logradouro', endereco,{ shouldValidate: true });
          console.log('Endereço:', endereco);
          setDisableLogadouro(true);
        } else {

          setValue('logradouro', '',{ shouldValidate: true });
          setDisableLogadouro(false);

        }
        


        // esse setdados e diferente
        // setDados(prevState => ({
        //   ...prevState,
        //   cep: prevState.cep,
        //   logradouro: endereco
        // }));
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
    }

  }, [getValues('cep')])


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
                    className={!errors?.nome ? "signup-form-input" : "invalid-signup-form-input"}
                    placeholder='Insira o seu nome'
                    {...register("nome", CustomValidator('nome'))}
                  />
                  {errors?.nome &&
                    <p className="error-message">{errors.nome?.message}</p>
                  }
                </div>

                <div className="form-group">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    maxLength={14}
                    title="Digite um CPF válido no formato XXX.XXX.XXX-XX"
                    className={!errors?.cpf ? "signup-form-input" : "invalid-signup-form-input"}
                    placeholder='Insira o seu CPF'
                    {...register("cpf", CustomValidator('cpf'))}
                  />
                  {errors?.cpf &&
                    <p className="error-message">{errors.cpf?.message}</p>
                  }
                </div>

                <div className="form-group">
                  <label htmlFor="ddd">DDD</label>
                  <input
                    maxLength={4}
                    type="text"
                    {...register("ddd", CustomValidator('ddd'))}
                    title="Digite um DDD válido no formato XX"
                    placeholder="Insira o DDD"
                    className={!errors?.ddd ? "signup-form-input" : "invalid-signup-form-input"}
                  />
                  {errors?.ddd &&
                    <p className="error-message">{errors.ddd?.message}</p>
                  }
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    maxLength={10}
                    type="text"
                    {...register("telefone", CustomValidator('telefone'))}
                    title="Digite um telefone válido"
                    placeholder="Insira um número de telefone"
                    className={!errors?.telefone ? "signup-form-input" : "invalid-signup-form-input"}
                  />
                  {errors?.telefone &&
                    <p className="error-message">{errors.telefone?.message}</p>
                  }
                </div>

                <div className="form-group">
                  <label htmlFor="dtNascimento">Data de Nascimento</label>
                  <input
                    maxLength={10}
                    type="date"
                    {...register("dtNascimento", CustomValidator('dtNascimento'))}
                    title="Digite um telefone válido"
                    placeholder="Insira um número de telefone"
                    className={!errors?.dtNascimento ? "signup-form-input" : "invalid-signup-form-input"}
                  />
                  {errors?.dtNascimento &&
                    <p className="error-message">{errors.dtNascimento?.message}</p>
                  }
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
                    {...register("email", CustomValidator('email'))}
                    placeholder="Insira um email"
                    className={!errors?.email ? "signup-form-input" : "invalid-signup-form-input"}
                  />
                  {errors?.email &&
                    <p className="error-message">{errors.email?.message}</p>
                  }
                </div>

                <div className="form-group">
                  <label htmlFor="senha">Senha</label>
                  <input
                    type="password"
                    {...register("senha", CustomValidator('senha'))}
                    placeholder="Insira um email"
                    className={!errors?.senha ? "signup-form-input" : "invalid-signup-form-input"}
                  />
                  {errors?.senha &&
                    <p className="error-message">{errors.senha?.message}</p>
                  }
                </div>

                <div className="form-group">
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    maxLength={9}
                    {...register("cep", CustomValidator('cep'))}
                    placeholder="Insira um cep valido"
                    className={!errors?.cep ? "signup-form-input" : "invalid-signup-form-input"}
                  />
                  {errors?.cep &&
                    <p className="error-message">{errors.cep?.message}</p>
                  }{!errors?.cep &&
                    <p className='info-message'>Digite o seu cep que corretamente que iremos completar o seu endereço</p>
                    }
                </div>


                <div className="form-group">
                  <label htmlFor="logradouro">Logradouro</label>
                  <input
                    type="text"
                    readOnly={disableLogadouro}
                    {...register("logradouro", CustomValidator('logradouro'))}
                    placeholder="Digite o seu logradouro"
                    className={!errors?.logradouro ? "signup-form-input" : "invalid-signup-form-input"}
                  />
                  {errors?.logradouro &&
                    <p className="error-message">{errors.logradouro?.message}</p>
                  }
                </div>


                {/* <div className="form-group">
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
                </div> */}


                {/* <div className="form-group">
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
                </div> */}


                {/* <div className="form-group">
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
                </div> */}

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
                    disabled={showLoadingSpinner || !isValid || !isDirty}
                    className='btn-form'
                  >{!showLoadingSpinner ? 'Cadastrar' : <span className="spinner"></span>}</button>
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