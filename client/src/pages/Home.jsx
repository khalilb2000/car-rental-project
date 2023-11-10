import heroCar from '../img/maincar.png'
import { Container, Offcanvas, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
// import LocationPage from './location';

const Home = () => {


  return (
    <>
    <Container className="row flex-lg-row-reverse align-items-center g-5 py-5 mt-5">
      <Container className='d-none d-lg-block col-10 col-sm-8 col-lg-6'>
        <img
        className=''
          src={heroCar}
          width={700}
          height={500}
        />
      </Container>
      <Container className='col-lg-6'>
        <h1 className='display-5 fw-bold lh-1 mb-3'>Plan your trip now! SAVE with our car rental</h1>
        <p>Our car rental services redefine the way you explore the world. Drive into adventure with confidence,
          as we offer a fleet of top-notch vehicles to suit every traveler's needs. Whether you're craving the thrill of
          the open road or seeking the perfect ride for a weekend getaway, we've got you covered. Your dream ride awaits—unleash the road, embrace the freedom.
        </p>
        <Container button ='btn btn-outline-secondary btn-lg px-4'>
          <Link to="location"><Button className='btn btn-outline-secondary btn-lg px-4"'> Book Now </Button> </Link> 
          <Link to="about"><Button className='btn btn-outline-secondary btn-lg px-4"'> Learn More </Button> </Link>
        </Container>
      </Container>
    </Container>
    </>
  );
}

export default Home;
