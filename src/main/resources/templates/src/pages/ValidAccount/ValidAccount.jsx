import './ValidAccount.css';

import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/HeaderNoOptions';

const ValidateAccont = () => {
  const [objRotas, setObjRotas] = React.useState(new URLSearchParams(useLocation().search));
  const [codigo, setCodigo] = React.useState(objRotas.get('codigo'));
  const [valido, setValido] = React.useState(null);


  // CASO A ROTA SEJA QUERY PARAMS
  //const objRotas = new URLSearchParams(useLocation().search);


  // CASO A ROTA SEJA PATH PARAMS
  // // Cria um objeto com os parâmetros da URL
  // const paramss = useParams();

  // // captura o codigo da URL
  // const test = paramss.codigo;


  async function validaCodigo(codigo) {
    // Se Sim - vai verificar no back se o código é válido ou não
    const request = await fetch(`http://localhost:8080/usuario/validaconta/consulta/${codigo}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })


      const jsonData = await request.json();

      if(!jsonData.erro){
        setValido(jsonData.valido);
        console.log(jsonData);
      }


  }



  // captura o codigo da URL


  // useEffect(() => {
  //   /**
  //    * 1 - Verifica se o código é um número
  //    *  Se Sim - vai verificar no back se o código é válido ou não
  //    *  Se Não - vai solicitar um novo codigo para o back se o usuario passado o email pelo body da request
  //    * * */
  //   validaCodigo(codigo);
  // }
  //   , [codigo]);

  useEffect(() => {
    if (codigo !== null) {
      validaCodigo(codigo);
    }
  }, [codigo]);


  return (
    <div>
      <Header />
      <div className="container2">
      <h1>{valido.toString()}</h1>
      <h2>teste</h2>
      </div>
      <div className='container'>
        <button onClick={() => console.log(JSON.stringify(objRotas))}>show email</button> 
      </div>
    </div>
  );
}

export default ValidateAccont;