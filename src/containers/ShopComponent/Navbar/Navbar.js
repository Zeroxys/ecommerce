import React from 'react'

import Classes from './Navbar.css'

const Navbar = () => {
  return (
    <div className={Classes.Navbar}>
      <h1>Auto partsmx</h1>

      <nav>
        <ul className={Classes.Navigation}>
          <li><a className={Classes.Links} href="#">Inicio</a></li>
          <li><a className={Classes.Links} href="#">Clientes</a></li>
          <li><a className={Classes.Links} href="#">Ubicacion</a></li>
          <li><a className={Classes.Links} href="#">Contacto</a></li>
          <li><a className={Classes.Links} href="#">Ofertas</a></li>
          <li><a className={Classes.Links} href="#">Icon</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar