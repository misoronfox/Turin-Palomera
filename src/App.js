import './styles/App.css' ;
import Navbarra from './components/NavBar';
import './styles/StyleSheet.css';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'



function App() {
  return (
    <>
      <header className="App">
        <Navbarra/>
      </header>
      <div className="App"> 
        <ItemListContainer/>
        <ItemCount/>
      </div>
    </>
  );
}

export default App;
