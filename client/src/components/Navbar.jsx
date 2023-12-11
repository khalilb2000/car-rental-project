import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas, Button, NavDropdown, Form } from 'react-bootstrap';
import carSVG from '../img/car-solid.svg';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';


const styles = {
  border: {
  },
  logoSize: {
    fontSize: '2rem',
    fontFamily: 'Roboto Condensed'
  },
  fontColor: {
    color: "black"
  }

}


export default function AppNavbar() {
  const expand = 'md';

  const { loading, error, data } = useQuery(GET_ME);
  const userData = data?.me || {};

  return (
    <>
      <Navbar key={expand} expand={expand} style={styles.border}>
        <Container fluid className=' mr-5 ml-5'>
          {/* <Navbar.Brand href="/">
            <img
              alt=""
              src={carSVG}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            WheelsOnDemand
          </Navbar.Brand> */}
          <Navbar.Brand href="/" style={styles.logoSize}>
            {/* <img
              alt=""
              src={carSVG}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
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
                <Nav.Link as={Link} to="/" className="link ">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="link" activeClassName="active">
                  Contact us
                </Nav.Link>

                {Auth.loggedIn() ? (
                  <>
                    <Nav.Item disabled className='d-flex align-items-center'>Hello, {userData.username}!</Nav.Item>
                    <div className=''>
                      <Nav.Link as={Link} onClick={Auth.logout} to="/logout" className="link" activeClassName="active">
                        Logout
                      </Nav.Link>
                    </div>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login" className="link" activeClassName="active">
                    Login/Sign up
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  )
}
