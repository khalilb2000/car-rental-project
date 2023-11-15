// // import { Navigate, useParams } from 'react-router-dom';
// // import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button, Container } from 'react-bootstrap';

// // import { QUERY_USER, QUERY_ME } from '../utils/queries';

// // import Auth from '../utils/auth';

const ProductInfo = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(`${location.state.zipCode}`);

  const vehicles = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 30,
      availability: true,
      image: '../src/img/toyota-camry.png',
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'F-150',
      year: 2021,
      price: 50,
      availability: true,
      image: '../src/img/ford-f150.png',
    },
    {
      id: 3,
      brand: 'Chrysler',
      model: 'Pacifica',
      year: 2022,
      price: 65,
      availability: true,
      image: '../src/img/chrysler-pacifica.png',
    },
    {
      id: 4,
      brand: 'Lamborghini',
      model: 'Huracan Tecnica',
      year: 2023,
      price: 200,
      availability: false,
      image: '../src/img/huracan-tecnica.png',
    },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleImageClick = (vehicle) => {
    setSelectedVehicle((prevSelectedVehicle) => {
      if (prevSelectedVehicle === vehicle.id) {
        return null;
      } else {
        return vehicle.id;
      }
    });
  };


  const centerTextStyles = {
    textAlign: 'center',
    margin: '0 auto'
  }

  return (
    <>
      <Container className=''>
        <h1>Step:2 </h1>
        <ProgressBar animated now={66} />
      </Container>
      <Container>
        <h1 style={centerTextStyles}>Select from our list of vehicles</h1>
        <br/>

        {vehicles.map((vehicle) => (
          <Container key={vehicle.id}><h2>{vehicle.brand} {vehicle.model}</h2><Container style={{ display: 'flex' }}><img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            onClick={() => handleImageClick(vehicle)}
            style={{ cursor: 'pointer', marginRight: '20px', width: '225px' }}
          />
            {selectedVehicle === vehicle.id && (
              <Container>
                <p>Year:{vehicle.year}</p>
                <p>Price per day: ${vehicle.price}</p>
                <p>Availability: {vehicle.availability ? 'Available' : 'Not available'}</p>
                <Button
                  onClick={() => {
                    navigate('/finish',
                      {
                        replace: true,
                        state: {
                          zipCode: location.state.zipCode,
                          pickupDate: location.state.pickupDate,
                          dropOffDate: location.state.dropOffDate,
                          selectedVehicle: vehicle,
                        }
                      })
                  }}>
                  Book Now!
                </Button>
              </Container>
            )}
          </Container><hr /></Container>
        ))}
      </Container>
    </>
  );
};

export default ProductInfo;
