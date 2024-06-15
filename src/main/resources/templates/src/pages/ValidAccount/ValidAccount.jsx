import React from 'react';
import { useParams } from 'react-router-dom';

const ValidateAccont = () => {
    // Cria um objeto com os parâmetros da URL
    const paramss = useParams();

    // captura o codigo da URL
    const test = paramss.codigo;



  
  
    return (
      <div>
        <h2>Search Results</h2>
        <p>Search query: {test}</p>
        {/* <button 
        onClick={() => 
            {addParam()}
        }
        >Teste 1</button> */}
      </div>
    );
  }

  export default ValidateAccont;