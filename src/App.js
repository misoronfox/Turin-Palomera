import './styles/App.css' ;
import Navbarra from './components/NavBar';
import './styles/StyleSheet.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Navbarra/>
      <Routes>
        <Route  path="/" element={<ItemListContainer />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
        <Route  path="/category/:id" element={<ItemListContainer/>} />         
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
