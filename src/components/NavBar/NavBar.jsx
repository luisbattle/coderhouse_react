import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
export default function NavBar() {
    return (<>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand className='navbar-brand'><Link to={"/"}>eCommerce</Link ></Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link as={Link} to={"/"}>Home</Nav.Link> */}
                    <Nav.Link as={Link} to={"/products"}>Productos</Nav.Link>
                    {/* <Nav.Link as={Link} to={"/about"}>Nosotros</Nav.Link> */}
                    {/* DropDown By Category */}
                    <Dropdown>
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            Categories
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={"/products/deportes"}>Deportes</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/products/vinos"}>Vinos y Bodegas</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/products/tecno"}>Tecno</Dropdown.Item>
                            <Dropdown.Item as={Link} to={"/products/electro"}>Electro</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </>
    )
}
