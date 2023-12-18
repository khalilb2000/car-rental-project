import { Button, Form } from 'react-bootstrap';
import vw from '../img/vw.png'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Auth from '../utils/auth';


const style = {
  heroConatiner: {
    minHeight: '500px',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${vw})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    zIndex: 1,
    alt: 'Car driving',
  },
  formContainer: {
    minHeight: '100px',
  },
  formGreeting: {
    marginLeft: '4rem'
  },
  whiteText: {
    color: 'white'
  },
  whiteConatiner: {
    backgroundColor: 'white'
  },
  accentBtn: {
    // backgroundColor: '#BA5236',
    backgroundColor: 'rgb(0, 40, 95)',
    height: '4rem'
  },
  border: {
    // border: 'solid 2px rgb(0, 40, 95)'
  },
  font: {
    fontFamily: 'Roboto, sans-seriff'
  },
  cardContainer: {
    border: '1px solid #c3c3c3',
    boxShadow: '0 1px 3px rgba(0,0,0,.2)',
    height: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

}



const Home = () => {
  // const isLoggedIn = Auth.loggedIn();
  return (
    <>
      <div className="d-flex flex-column align-items-center col-12 justify-center" style={style.heroConatiner}>

        <div className='d-flex justify-content-start col-10' style={style.whiteText}>
          <h1 style={style.font}>Journey with us!</h1>
        </div>
        <div className='border px-2 rounded col-10' style={style.whiteConatiner}>
          <div className='' style={style.formGreeting}>
            {/* this is where the view/edit/  buttons will go  */}
            <h3 style={style.font}>Reserve A Vehicle</h3>
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
      <div className='w-100 d-flex justify-content-around mt-2'>
        <Card style={style.cardContainer} className='col-3'>
          <h1>current deals</h1>
        </Card>
        <Card style={style.cardContainer} className='col-3'>
          <h1>points</h1>
        </Card>
        <Card style={style.cardContainer} className='col-3'>
          <h1>travel planning</h1>
        </Card>
      </div>
    </>
  );
}

export default Home;
