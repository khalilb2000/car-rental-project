import chrysler from '../img/chrysler-pacifica.png';
import ford from '../img/ford-f150.png';
import huracan from '../img/huracan-tecnica.png';
import toyota from '../img/toyota-camry.png';
import Van from '../img/chevyVan.png';
import Tesla from '../img/tesla.png'

import { Button, Container, Card, ProgressBar } from 'react-bootstrap';
import { useState } from 'react';
import { useLocation, useNavigate, Link  } from 'react-router-dom';
// import Home from './Home';

const ProductInfo = () => {
  const vehicles = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 200,
      availability: true,
      image: toyota,
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'F-150',
      year: 2021,
      price: 250,
      availability: true,
      image: ford,
    },
    {
      id: 3,
      brand: 'Chrysler',
      model: 'Pacifica',
      year: 2022,
      price: 100,
      availability: true,
      image: chrysler,
    },
    {
      id: 4,
      brand: 'Lamborghini',
      model: 'Huracan Tecnica',
      year: 2023,
      price: 1000,
      availability: false,
      image: huracan,
    },
    {
      id: 5,
      brand: "Chevy",
      model: 'Express',
      year: 2020,
      price: 200,
      availability: true,
      image: Van,
    },
    {
      id: 6,
      brand: "Tesla",
      model: 'Model S',
      year: 2020,
      price: 349,
      availability: true,
      image: Tesla,
    }
  ];


  const location = useLocation();
  const { pickUpLocation, zipCode, pickUpTime, pickupDate, dropOffDate} = location.state;

  return (
    <>
      <div>
        <div>
          this will have progression
          <ProgressBar now={25} />
          <h1>{pickUpLocation}</h1>
        </div>
        <div>
          <h1>Select from our list of vehicles</h1>
        </div>
        <div className='d-flex flex-wrap gap-5 justify-content-around'>
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className='col-3'>
              <Container>
                <img
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  style={{ cursor: 'pointer', marginRight: '20px', width: '225px' }}
                />
                <Container>
                  <h2>{vehicle.brand} {vehicle.model}</h2>
                  <div>
                    <icon>info btn</icon>
                  </div>
                  <div>
                    <div>
                      <p>${vehicle.price}</p>
                      <Button>
                        Book Now!
                      </Button>
                    </div>
                  </div>
                </Container>
              </Container><hr />
            </Card>
          ))}
        </div>
      </div>
      <Link to="/Finish">to finish</Link>
    </>
  );
};

export default ProductInfo;
