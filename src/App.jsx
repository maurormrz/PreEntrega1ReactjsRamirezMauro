import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { Header } from './components/header/Header';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido! Descubre nuestra selección de balones para los distintos tipos de deportes." />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="¡Bienvenido! Descubre nuestra selección de balones para los distintos tipos de deportes." />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;