import { Link, useNavigate, useLocation } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const style = {
  backDrop: {
    backgroundColor: '#D3D3D3',

  }
}

const Finish = () => {
  const { loading, error, data } = useQuery(GET_ME);
  const navigate = useNavigate();
  const location = useLocation();
  const userData = data?.me || {};

  const { pickUpLocation, pickUpTime, pickUpDate, dropOffDate, vehicleData } = location.state;


  return (
    <>
      <Container className=''>
        <h1>Congrats  {userData.username}! 100% </h1>
        <ProgressBar animated now={100} />
        <Container className='d-flex col-12 gap-5 m-5 justify-flex-end'>
          {/* <Link to='/product-info'> */}
            <Button
              onClick={() => {
                navigate('/product-info',
                  {
                    replace: true,
                    state: {
                      pickUpLocation: location.state.pickUpLocation,
                      pickUpDate: location.state.pickUpDate,
                      dropOffDate: location.state.dropOffDate,
                      pickUpTime: location.state.pickUpTime,
                      vehicleData: null,
                    }
                  })
              }}>
              ⬅️ vehicles
            </Button>
          {/* </Link> */}
          <Link to='/'>
            <Button>
              Cancel
            </Button>
          </Link>
        </Container>
      </Container>
      <Container className='mt-5'>
        <h2>Order summary:</h2>

        <Container className='d-flex'>

          <Container>
            <p><span className='fw-light'>Pick-up Date</span>:<br /> <span className='fs-3'>{pickUpDate}</span></p>
            <p><span className='w-light'>Location</span>:<br /> <span className='fs-3'>{pickUpLocation}</span></p>
          </Container>

          <Container>
            <p><span className='fw-light'>Drop-off Date</span>:<br /> <span className='fs-3'>{dropOffDate}</span></p>
          </Container>
          <Container>
            <p><span className='fw-light'>Pick-Up Time</span>:<br /> <span className='fs-3'>{pickUpTime}</span></p>
          </Container>

        </Container>

        <Container style={style.backDrop} >
          <p><span className='fw-light'>Selected Vehicle</span>: <br /> <span className='fs-3'>{vehicleData.brand} {vehicleData.model}</span></p>
        </Container>
      </Container>
      <h1>Email with detail to {userData.email}</h1>
      <Link to='/'>
        <Button>
          Finish
        </Button>
      </Link>

    </>
  );
};
export default Finish;
