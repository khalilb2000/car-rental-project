import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas, Button, NavDropdown, Form} from 'react-bootstrap';
import carSVG from '../img/car-solid.svg';

export default function AppNavbar() {
  const expand = 'md';
  return (
    <>
      <Navbar key={expand} expand={expand} >
        <Container fluid>
          <Navbar.Brand href="/">
          <img
              alt=""
              src={carSVG}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            WheelsOnDemand
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/" className="link" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="link" activeClassName="active">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="link" activeClassName="active">
              Contact us
            </Nav.Link>
            <div className='importantBox'>
              <Nav.Link as={Link} to="/login" className="link" activeClassName="active">
                Login
              </Nav.Link>
            </div>
            <div className='importantBox'>
              <Nav.Link as={Link} to="/signup" className="link" activeClassName="active">
                Signup
              </Nav.Link>
            </div>
            <div className='importantBox'>
              <Nav.Link as={Link} to="/logout" className="link" activeClassName="active">
                Logout
              </Nav.Link>
            </div>
          </Nav>
          </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  )
}
