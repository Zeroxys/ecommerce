import React from 'react'
import Aux from '../../hoc/Aux'

import Classes from './Layout.css'

const layout = (props) => 
  <Aux>
    <div className={Classes.Session}>
      <ul className={Classes.Nav}>
        <li><a className={Classes.Links} href="#">Registrar</a></li>
        <li><a className={Classes.Links} href="#">Clientes</a></li>
      </ul>
    </div>
    <main className={Classes.Layout}>
      {props.children}
    </main>
  </Aux>
  

export default layout