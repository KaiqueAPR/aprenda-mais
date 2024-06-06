import React from 'react'
import Header from '../../components/Header/Header'
import CardCourse from '../../components/CardCourse/CardCourse';

import { IoChevronForwardCircle } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";

import '../Home/home.css'

const Home = () => {
  let user

  const arrowIconStyles = {
    width: '50px',
    height: '50px',
  }

  return (
    <>
      <Header />
      <section className='home-container'>
        <h1 className='user-hello'>Olá, {typeof (user)}.</h1>
        <div className='courses-container'>
          <p className='courses-carousel-title'>Cursos em andamento</p>
          <div className='courses-list'>
            <IoChevronBackCircle style={arrowIconStyles} />
            <CardCourse title={"teste"} duration={"13"} image={"https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010144.jpg?t=st=1717714398~exp=1717717998~hmac=df20be3056144a755d49c6722399e43d84e8c96e555e32c7a476d5694365fe66&w=740"}/>
            <CardCourse title={"teste"} duration={"13"} />
            <CardCourse title={"teste"} duration={"13"} />
            <CardCourse title={"teste"} duration={"13"} />
            <IoChevronForwardCircle style={arrowIconStyles} />
          </div>
        </div>
        <div className='courses-container'>
          <p className='courses-carousel-title'>Cursos sugeridos</p>
          <div className='courses-list'>
            <IoChevronBackCircle style={arrowIconStyles} />
            <CardCourse title={"teste"} duration={"13"} />
            <CardCourse title={"teste"} duration={"13"} />
            <CardCourse title={"teste"} duration={"13"} />
            <CardCourse title={"teste"} duration={"13"} />
            <IoChevronForwardCircle style={arrowIconStyles} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home