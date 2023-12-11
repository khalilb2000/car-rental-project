import chrysler from '../img/chrysler-pacifica.png'
import ford from '../img/ford-f150.png'
import huracan from  '../img/huracan-tecnica.png'
import toyota from '../img/toyota-camry.png'
import { Button, Container } from 'react-bootstrap';

const ProductInfo = () => {
  const vehicles = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 30,
      availability: true,
      image: toyota,
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'F-150',
      year: 2021,
      price: 50,
      availability: true,
      image: ford,
    },
    {
      id: 3,
      brand: 'Chrysler',
      model: 'Pacifica',
      year: 2022,
      price: 65,
      availability: true,
      image: chrysler,
    },
    {
      id: 4,
      brand: 'Lamborghini',
      model: 'Huracan Tecnica',
      year: 2023,
      price: 200,
      availability: false,
      image: huracan,
    },
  ];

  const centerTextStyles = {
    textAlign: 'center',
    margin: '0 auto'
  }

  return (
    <>
      <Container>
        <h1 style={centerTextStyles}>Select from our list of vehicles</h1>
        <br/>
        {vehicles.map((vehicle) => (
          <Container key={vehicle.id}><h2>{vehicle.brand} {vehicle.model}</h2><Container style={{ display: 'flex' }}><img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            style={{ cursor: 'pointer', marginRight: '20px', width: '225px' }}
          />
              <Container>
                <p>Year:{vehicle.year}</p>
                <p>Price per day: ${vehicle.price}</p>
                <p>Availability: {vehicle.availability ? 'Available' : 'Not available'}</p>
                <Button>
                  Book Now!
                </Button>
              </Container>
          </Container><hr /></Container>
        ))}
      </Container>
    </>
  );
};

export default ProductInfo;
