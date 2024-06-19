import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

import '../EmailAuth/emailAuth.css'

const EmailAuth = () => {
  return (
    <section className='auth-container'>
      <IoCheckmarkCircleSharp className='auth-icon'/>
      <div className='auth-text-container'>
        <h1>Seu email foi autenticado com sucesso!</h1>
        <p>Você será redirecionado para Login.</p>
      </div>
    </section>
  )
}

export default EmailAuth