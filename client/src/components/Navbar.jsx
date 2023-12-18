import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';


const styles = {
  border: {
  },
  logoSize: {
    fontSize: '2rem',
    fontFamily: 'Roboto Condensed'
  },
  fontColor: {
    color: "rgb(247, 139, 0)"
  },
  secondaryContainer: {
    backgroundColor: 'rgb(247, 139, 0)',
    color: 'rgb(255, 255, 255)',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  font: {
    fontFamily: 'Roboto, sans-seriff'
  }


}


export default function AppNavbar() {
  const expand = 'md';

  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};

  return (
    <>
      <Navbar key={expand} expand={expand} style={styles.border}>
        <Container fluid className=' mr-5 ml-5'>
          <Navbar.Brand href="/" style={styles.logoSize}>
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
                <Nav.Link as={Link} to="/" className="link " style={styles.fontColor}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="link" activeClassName="active"  style={styles.fontColor}>
                  Contact us
                </Nav.Link>

                {Auth.loggedIn() ? (
                  <>
                    <Nav.Item disabled className='d-flex align-items-center'>Hello, {userData.username}!</Nav.Item>
                    <div className=''>
                      <Nav.Link as={Link} onClick={Auth.logout} to="/logout" className="link" activeClassName="active"  style={styles.fontColor}>
                        Logout
                      </Nav.Link>
                    </div>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login" className="link" activeClassName="active"  style={styles.fontColor}>
                    Login/Sign up
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className='d-flex'>
        <div className='col-4 ' style={styles.secondaryContainer}>
          <h4 style={styles.font}>
            Deals
            </h4>
        </div>
        <div className='col-4' style={styles.secondaryContainer}>
          <h4 style={styles.font}>
            Cars & Services
            </h4>
        </div>
        <div className='col-4' style={styles.secondaryContainer}>
          <h4 style={styles.font}>
            Locations
            </h4>
        </div>
      </div>

    </>
  )
}
