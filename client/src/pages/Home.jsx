import heroCar from '../img/maincar.png'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import appleApp from '../img/appleApp.png';
import androidApp from '../img/androidApp.png';
import iphoneTest from '../img/iphoneTest.png';
import Banner from '../img/Banner.png'
// import LocationPage from './location';
import Auth from '../utils/auth';

const style = {
  fullSize: {
    width: "100%",
    margin: '0',
    backgroundColor: '#2d2d2d',
    color: 'white'
  },
  letteStyle: {
    fontSize: '4.5rem',
  },
  bannerStyle: {
    position: 'absolute', // Set position to absolute
    top: '-15rem',
    left: '11rem',
    zIndex: '-1', // Set z-index to -1 to place it behind other elements
    width: '100%',
  },
  importantBtn: {
    backgroundColor: 'red'
  }

}



const Home = () => {
  const isLoggedIn = Auth.loggedIn();

  return (
    <>
      <Container className="row flex-lg-row-reverse align-items-center g-5 py-5 mb-5 vh-100">
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
          <p> Our car rental services redefine the way you explore the world. Drive into adventure with confidence,
            as we offer a fleet of top-notch vehicles to suit every traveler's needs. Whether you're craving the thrill of
            the open road or seeking the perfect ride for a weekend getaway, we've got you covered. Your dream ride awaits—unleash the road, embrace the freedom.
          </p>
          <Container button='btn btn-outline-secondary btn-lg px-4'>
            <Link to={isLoggedIn ? '/location' : '/login'}><Button className='btn btn-outline-primary btn-lg px-4"' style={style.importantBtn}> Book Now </Button> </Link>
            <Link to="about"><Button className='btn btn-outline-secondary btn-lg px-4"'> Learn More </Button> </Link>
          </Container>
        </Container>
      </Container>

      <Container className='col-12 d-column align-items-center mb-5 ' style={style.fullSize}>
        <Container className='text-center p-5 fs-1'>
          <h1 className='fw-bold' style={style.letteStyle}>Save big with our rental cars!</h1>
        </Container>
        <Container className='text-center p-5'>
          <h3 className='fs-1 fw-bold'><span style={{ color: 'red' }}>24/7</span> Support!</h3>
        </Container>
      </Container>

      <Container className='d-flex bg-body-secondary flex-row px-5 mt-5'>
        <Container className='col-lg-12 col-xl-6'>
          <p>
            <span className='fw-bold fs-1'>Download our app to get the most out of it.</span>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias voluptas earum possimus velit est nisi, placeat aliquam! Ex, earum dolorum delectus ea magni minima?
            Quam repellat saepe vitae tempora possimus.
          </p>
          <img
            src={androidApp}
            width={200}
            height={66}
          />
          <img
            src={appleApp}
            width={200}
            height={63}
          />
        </Container>
        <Container className='col-lg-12 col-xl-6'>
          <img
            className='w-100 h-100'
            src={iphoneTest}
          />
        </Container>
      </Container>

    </>
  );
}

export default Home;
