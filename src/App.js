import './styles/App.css' ;
import Navbarra from './components/NavBar';
import './styles/StyleSheet.css';
import ItemListContainer from './components/ItemListContainer'

function App() {
  const products = [
        {id: "1", title: "Cerveza", price: "700$ Clp", pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Helles_im_Glas-Helles_%28pale_beer%29.jpg" },
        {id: "2", title: "Vodka", price: "4.000$ Clp", pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/SkyyVodka750ml.jpg" },
        {id: "3", title: "Oporto", price: "12.000$ Clp", pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/White_port.jpg" },
        {id: "4", title: "Enguindado ", price: "price4", pictureUrl: "https://okdiario.com/img/recetas/2017/02/27/licor-de-cerezas-casero.jpg" },
        
        
      ]

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
