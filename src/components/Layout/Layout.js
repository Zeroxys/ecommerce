import React from 'react'
import Aux from '../../hoc/Aux'

import Classes from './Layout.css'

const layout = (props) => 
  <Aux>
    <div>Navbar</div>
    <main className={Classes.Layout}>
      {props.children}
    </main>
  </Aux>
  

export default layout