import './styles/App.css' ;
import Navbarra from './components/NavBar';
import './styles/StyleSheet.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import ShoppingCart from './components/Cart'
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/CartContext';

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbarra/>
        <Routes >
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Item/:id" element={<ItemDetailContainer />} />
          <Route  path="/category/:id" element={<ItemListContainer/>} />  
          <Route path="/Cart" element={<ShoppingCart/>} />       
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
