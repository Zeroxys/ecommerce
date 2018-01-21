import React from 'react'

import Form from './Form/Form'
import Classes from './Footer.css'

const Footer = () => {
  return (
    <footer className={Classes.Footer}>
      <div className={Classes.Title}>
        <h3>Auto partsmx</h3>
      </div>

      <div className={Classes.Contact}>
        <section>
          <h3>Numeros de contacto</h3>
          <p>123124</p>
        </section>
        <section>
          <h3>Numeros de contacto</h3>
          <p>123124</p>
        </section>
        <section>
          <h3>CONTACTANOS</h3>
          <Form classes={Classes}/>
        </section>
      </div>
      <p className={Classes.Copyrigth}>Condiciones de uso Aviso de privacidad© 2017, Auto partsmx,  o afiliados. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer