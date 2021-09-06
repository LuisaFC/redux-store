import React from 'react';
import {Provider} from 'react-redux'
import Cart from './components/Cart';


import Catalog from './components/Catalog';
import store from './store';

function App() {
  return (

    //Tudo que estiver dentro do provider terá acesso ao store 
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
