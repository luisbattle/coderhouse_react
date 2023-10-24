import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path='/' element={<ItemListContainer message="Bienvenido a mi primer eCommerce" />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<ItemListContainer />} />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          <Route exact path='/products/:category' element={<ItemListContainer />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App
