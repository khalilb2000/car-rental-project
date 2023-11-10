// // import { Navigate, useParams } from 'react-router-dom';
// // import { useQuery } from '@apollo/client';

// // import { QUERY_USER, QUERY_ME } from '../utils/queries';

// // import Auth from '../utils/auth';

import { useState } from 'react';


const ProductInfo = () => {
  const vehicles = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 30,
      availability: true,
      image: './assets/toyota-camry.png',
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'F-150',
      year: 2021,
      price: 50,
      availability: true,
      image: './assets/ford-f150.png',
    },
    {
      id: 3,
      brand: 'Chrysler',
      model: 'Pacifica',
      year: 2022,
      price: 65,
      availability: true,
      image: './assets/chrysler-pacifica.png',
    },
    {
      id: 4,
      brand: 'Lamborghini',
      model: 'Huracan Tecnica',
      year: 2023,
      price: 200,
      availability: false,
      image: './assets/huracan-tecnica.png',
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

  return (
    <div><h1>List of Available Vehicles</h1>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id}><h2>
          {vehicle.brand} {vehicle.model}
        </h2><img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            style={{ width: '200px' }}
            onClick={() => handleImageClick(vehicle)}
          />
          {selectedVehicle === vehicle.id && (
            <div><p>Year: {vehicle.year}</p><p>Price per day: ${vehicle.price}</p><p>
              Availability: {vehicle.availability ? "Available" : "Not available"}
            </p><button>Book Now!</button></div>
          )}
          <hr /></div>
      ))}
    </div>
  );
};

export default ProductInfo;