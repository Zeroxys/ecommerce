import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Footer from '../../components/Footer/Footer'
import ShopSection from '../../components/ShopSection/ShopSection'

import Classes from './ShopComponent.css'

class ShopComponent extends Component {
  render () {
    return (
      <Aux>
        <div className={Classes.Navbar}>Navbar section</div>       
        <ShopSection/>
        <Footer/>
      </Aux>
    )
  }
}

export default ShopComponent