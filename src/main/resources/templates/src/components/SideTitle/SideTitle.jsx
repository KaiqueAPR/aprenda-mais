import React from 'react'
import './sideTitle.css'
import { IoChevronForwardOutline } from "react-icons/io5";

const SideTitle = () => {
    return (
        <section className='side-title-section'>
            <h1>Aprenda+</h1>
            <h2>
                Cursos<br />
                Gratuitos<br />
                Online
            </h2>
            <p>Cadastre-se em nossa plataforma</p>
            <div className='arrow-icon'><IoChevronForwardOutline /></div>
        </section>
    )
}

export default SideTitle