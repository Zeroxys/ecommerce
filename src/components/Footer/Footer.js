import React from 'react'

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
          <form>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Teléfono"/>
            <input type="text" placeholder="Mensaje"/>
            <input type="submit" name="Enviar"/>
          </form>
        </section>
      </div>

      <p>asdsda</p>
    </footer>
  )
}

export default Footer