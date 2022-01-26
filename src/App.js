import './styles/App.css' ;
import Navbarra from './components/NavBar';
import './styles/StyleSheet.css';
import ItemListContainer from './components/ItemListContainer'
import { useState, useEffect } from 'react';
import { getProductsFromCategory } from './services/Products';

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
    <>
    
      <header className="App">
        <Navbarra/>
      </header>
      <div className="App"> 
        <ItemListContainer products={products}/>
      </div>
    </>
  );
}

export default App;
