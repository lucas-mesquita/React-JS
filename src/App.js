import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/Navbar';
import ItemCount from './Components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenidos' />
      <ItemDetailContainer />
    </div>

  );
  
}

export default App;
