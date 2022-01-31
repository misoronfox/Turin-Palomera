import './styles/App.css' ;
import Navbarra from './components/NavBar';
import './styles/StyleSheet.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import React, { useState, useEffect } from 'react';
import { getProductsFromCategory } from './services/Products';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([])
  

  useEffect(() => {
    let mounted = true
    
    getProductsFromCategory("jewelery").then(items => {
      if(mounted) {
        console.log(items)
        setProducts(items)
      }
    })
    return () => mounted = false ;
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<ItemListContainer products={products}/>} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
        <Route  index path="/category/:id" element={<ItemListContainer/>} />         
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
