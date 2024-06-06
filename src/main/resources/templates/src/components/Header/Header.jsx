import { Link } from "react-router-dom"

import { IoLogOutOutline } from "react-icons/io5";
import { IoContrast } from "react-icons/io5";

import '../Header/header.css'

const Header = () => {
  return (
    <header className="header-container">
        <h1>Aprenda+</h1>
        <div className="header-menu-container">
            {/* Alterar conforme necessidade de rota de usuário */}
            <Link className="header-link" to={'/home'}>Inicio</Link>
            <Link className="header-link" to={'/courses'}>Cursos</Link>
            <Link className="header-link" to={'/profile'}>Perfil</Link>

            <IoContrast className="header-icon"/>
            <Link to={'/login'}><IoLogOutOutline className="header-icon"/></Link>
        </div>
    </header>
  )
}

export default Header