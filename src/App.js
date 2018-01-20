import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ShopComponent from './containers/ShopComponent/ShopComponent'

const App = () => {
    return (
      <div className="App">
        <Layout>
          <ShopComponent/>
        </Layout>
      </div>
    )
}

export default App;
