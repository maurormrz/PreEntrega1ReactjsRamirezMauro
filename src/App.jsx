import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/header/Header'

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting="¡Bienvenido! Descubre nuestra selección de balones para los distintos tipos de deportes." />
    </>
  )
}

export default App