import chrysler from '../img/chrysler-pacifica.png'
import ford from '../img/ford-f150.png'
import huracan from '../img/huracan-tecnica.png'
import toyota from '../img/toyota-camry.png'
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';


const orange = "#f28d21,  rgb(255, 255, 255)/rgb(0, 40, 95)"

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

  return (
    <>
      <div>
        <div>
          this will have progression
          <ProgressBar now={25} />
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
                      <p>$200</p>
                      <Button>
                        Book Now!
                      </Button>
                    </div>

                    <div>
                      <p>$300</p>
                      <Button>
                        Book Later!
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
