import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
export default function NavBar() {
    return (<>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand className='navbar-brand'>eCommerce</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Products">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Contactanos</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </>
    )
}
