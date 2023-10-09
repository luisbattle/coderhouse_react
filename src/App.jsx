import { Button, Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <Container>
      <NavBar />
      <ItemListContainer message="Bienvenido a mi primer eCommerce" />
      <Footer />
    </Container>
  )
}

export default App
