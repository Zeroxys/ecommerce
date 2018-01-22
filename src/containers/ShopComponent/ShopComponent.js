import React, {Component} from 'react'

import Aux from '../../hoc/Aux'
import Navbar from './Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ShopSection from '../../components/ShopSection/ShopSection'

import Classes from './ShopComponent.css'

class ShopComponent extends Component {
  render () {
    return (
      <Aux>
        <Navbar/>
        <div className={Classes.Banner}></div>    
        <ShopSection/>
        <Footer/>
      </Aux>
    )
  }
}

export default ShopComponent