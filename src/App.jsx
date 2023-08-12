import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {CartProvider } from './Components/Context/CartContext';
import { Cart } from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos' />} />
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='*' element={<h1>Error 404</h1>} />
          </Routes>
        </HashRouter>
      </CartProvider>
    </div>

  );

}

export default App;
