import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './Nav.css';
import Watermelon from '../../img/watermelon.png';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='container-content-navbar'>
      <Container className='container-itens-navbar'>
        <Navbar.Brand href="/">Super Trunfo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/game">Game</Nav.Link>
            <NavDropdown title="Register" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/register-card">Card</NavDropdown.Item>
              <NavDropdown.Item href="/register-person">Person</NavDropdown.Item>
              <NavDropdown.Divider/>
            </NavDropdown>
            <NavDropdown title="Edit" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/edit-card">Card</NavDropdown.Item>
              <NavDropdown.Item href="/edit-person">Person</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="View" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/show-cards">All Cards</NavDropdown.Item>
              <NavDropdown.Item href="/show-card">Card specific</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Delete" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/delete-card">Card</NavDropdown.Item>
              <NavDropdown.Item href="/delete-person">My account</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav className='nav-login'>
            <Nav.Link eventKey={2} href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;