import React from 'react'

import Classes from './Form.css'

const Form = (props) => {
  return (
    <form className={Classes.Form}>
      <input className={Classes.TextInput} type="text" placeholder="Nombre"/>
      <input type="text" className={Classes.TextInput} placeholder="Teléfono"/>
      <input type="text"  className={Classes.TextComments} placeholder="Mensaje"/>
      <input type="submit" className={Classes.Submit} name="Enviar"/>
    </form>
  ) 
}

export default Form