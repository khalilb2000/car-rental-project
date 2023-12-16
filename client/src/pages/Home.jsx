// import heroCar from '../img/maincar.png'
import {Button, Form} from 'react-bootstrap';
import heroCar from '../img/carimage.png'
import greenRoad from '../img/greenRoad.png'
import greenRoadWater from '../img/greenRoadWater.png'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import appleApp from '../img/appleApp.png';
// import androidApp from '../img/androidApp.png';
// import iphoneTest from '../img/iphoneTest.png';
// import LocationPage from './location';
// import Auth from '../utils/auth';

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
  heroConatiner: {
    minHeight: '800px',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${greenRoadWater })`,
    backgroundSize: 'cover',
    position: 'relative',
    zIndex: 1,
    alt: 'Car driving',

  },
  formContainer: {
    minHeight: '100px',
  },
  formGreeting:{
    marginLeft:'4rem'
  },
  whiteText: {
    color: 'white'
  },
  whiteConatiner:{
    backgroundColor: 'white'
  },
  accentBtn:{
    // backgroundColor: '#BA5236',
    backgroundColor: 'rgb(0, 40, 95)',
    height: '4rem'
  },
  border: {
    border: 'solid 2px gray'
  }

}



const Home = () => {
  // const isLoggedIn = Auth.loggedIn();
  return (
    <>
      <div className="d-flex flex-column align-items-center col-12 justify-center" style={style.heroConatiner}>

        <div className='d-flex justify-content-start col-10' style={style.whiteText}>
          <h1>Rent Cars, quick and easy!</h1>
        </div>
        <div className='border px-2 rounded col-10' style={style.whiteConatiner}>
          <div className='' style={style.formGreeting}>
            {/* this is where the view/edit/  buttons will go  */}
            <h3>Hello</h3>
          </div>
          <div className='d-flex align-items-center mb-5' style={style.formContainer}>
            <Form className="d-flex justify-content-around">
              <Form.Group controlId="formGridLocation" className='col-3' style={style.border}>
                <Form.Label>Pick-up Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  name="pickUpLocation"
                />
              </Form.Group>

              <Form.Group controlId="formGridDate" style={style.border}>
                <Form.Label>Pick-up Date</Form.Label>
                <Form.Control
                  type="date"
                  name="pickupDate"
                />
              </Form.Group>

              <Form.Group controlId="formGridTime" style={style.border}>
                <Form.Label>Pick-up Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="02:00 PM"
                  name="pickUpTime"
                />
              </Form.Group>

              <Form.Group controlId="formGridDropOffDate" style={style.border}>
                <Form.Label>Drop-off date</Form.Label>
                <Form.Control
                  type="date"
                  name="dropOffDate"
                />
              </Form.Group>
              <Link to='/product-info'><Button style={style.accentBtn}>Submit</Button></Link>
            </Form>
          </div>

        </div>

      </div>

      {/* <Container className='col-12 d-column align-items-center mb-5 ' style={style.fullSize}>
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
      </Container> */}

    </>
  );
}

export default Home;
