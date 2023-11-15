import { useLocation, Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { useNavigate } from 'react-router-dom'

const style = {
  backDrop: {
    backgroundColor: '#D3D3D3',

  }
}

const Finish = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { zipCode, pickupDate, dropOffDate, selectedVehicle } = location.state;
  const { loading, error, data } = useQuery(GET_ME);
  const userData = data?.me || {};


  return (
    <>
      <Container className=''>
        <h1>Congrats  {userData.username}! 100% </h1>
        <ProgressBar animated now={100} />
        <Container className='d-flex col-12 gap-5 m-5 justify-flex-end'>
          <Link to='/location'>
            <Button
              onClick={() => {
                navigate('/location',
                  {
                    replace: true,
                    state: {
                      zipCode: location.state.zipCode,
                      pickupDate: location.state.pickupDate,
                      dropOffDate: location.state.dropOffDate,
                      selectedVehicle: location.state.selectedVehicle
                    }
                  })
              }}>
              Start Over
            </Button>
          </Link>
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
            <p><span className='fw-light'>Pick-up Date</span>:<br /> <span className='fs-3'>{pickupDate}</span></p>
            <p><span className='w-light'>Zip Code</span>:<br /> <span className='fs-3'>{zipCode}</span></p>
          </Container>

          <Container>
            <p><span className='fw-light'>Drop-off Date</span>:<br /> <span className='fs-3'>{dropOffDate}</span></p>
          </Container>

        </Container>

        <Container style={style.backDrop} >
          <p><span className='fw-light'>Selected Vehicle</span>: <br /> <span className='fs-3'>{selectedVehicle.brand} {selectedVehicle.model} </span></p>
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
