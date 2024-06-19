import { Link } from "react-router-dom"

import { IoLogOutOutline } from "react-icons/io5";
import { IoContrast } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

import '../Header/header.css'
import { useState } from "react";

const Header = () => {
  const [menuDrop, setMenuDrop] = useState(false)

  const handleMenuDrop = () => {
    if (menuDrop == false) {
      setMenuDrop(true)
    } else {
      setMenuDrop(false)
    }
  }

  return (
    <>
      <header className="header-container">
        <h1>Aprenda+</h1>
        <div className="header-menu-container">
          <Link className="header-link" to={'/home'}>Inicio</Link>
          <Link className="header-link" to={'/courses'}>Cursos</Link>
          <Link className="header-link" to={'/profile'}>Perfil</Link>

          <IoContrast className="header-icon" />
          <Link to={'/login'}><IoLogOutOutline className="header-icon" /></Link>
        </div>
        <button onClick={handleMenuDrop}><IoMenu className="header-icon-mobile" /></button>
      </header>
      <div className={menuDrop ? "menu-mobile" : "hidden"}>
        <Link className="header-link" to={'/home'}>Inicio</Link>
        <Link className="header-link" to={'/courses'}>Cursos</Link>
        <Link className="header-link" to={'/profile'}>Perfil</Link>

        <IoContrast className="header-icon" />
        <Link to={'/login'}><IoLogOutOutline className="header-icon" /></Link>
      </div>
    </>
  )
}

export default Header