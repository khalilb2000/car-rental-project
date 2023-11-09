// // import { Navigate, useParams } from 'react-router-dom';
// // import { useQuery } from '@apollo/client';

// // // import ThoughtForm from '../components/ThoughtForm';
// // // import ThoughtList from '../components/ThoughtList';

// // import { QUERY_USER, QUERY_ME } from '../utils/queries';

// // import Auth from '../utils/auth';

// const ProductInfo = () => {
//     // const { loading, data } = useQuery(QUERY_THOUGHTS);
//     // const thoughts = data?.thoughts || [];
  
//     return (
//       <div className="select-a-car">
//         <div className="section">
//           <h2>Select One:</h2>
//         </div>

//       {/* show the sedan option */}
//         <div className="sedan">
//           <h3 className="card-header">Sedan</h3>
//           {/* <img> </img> */}
//         </div>
  
//         <button className="book-ride">Book Ride</button>

//         {/* show the truck option */}
//         <div className="truck">
//           <h3 className="card-header">Truck</h3>
//           {/* <img> </img> */}
//         </div>
  
//         <button className="book-ride">Book Ride</button>

//         {/* show the van option */}
//         <div className="minivan">
//           <h3 className="card-header">Minivan</h3>
//           {/* <img> </img> */}
//         </div>
  
//         <button className="book-ride">Book Ride</button>

//         {/* show the sports car option */}
//         <div className="sports-car">
//           <h3 className="card-header">Sports Car</h3>
//           {/* <img> </img> */}
//         </div>
  
//         <button className="book-ride">Book Ride</button>


//         {/* show the moving truck option */}
//         <div className="moving-truck">
//           <h3 className="card-header">Moving Truck</h3>
//           {/* <img> </img> */}
//         </div>
  
//         <button className="book-ride">Book Ride</button>

//       </div>
//     );
//   }
  
//   export default ProductInfo;

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
    // Add more vehicles as needed
  ];

  // const [expandedVehicle, setExpandedVehicle] = useState(null);

  // const handleClick = (vehicle) => {
  //   if (expandedVehicle === vehicle) {
  //     setExpandedVehicle(null); // Collapse if already expanded
  //   } else {
  //     setExpandedVehicle(vehicle); // Expand if not expanded
  //   }
  // };

  return (
    <div><h1>List of Available Vehicles</h1>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id}><h2>{vehicle.brand} {vehicle.model}</h2><img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.model}`}
            style={{ width: '200px', cursor: 'pointer' }}
            // onClick={() => handleClick(vehicle)}
          />
          {/* {expandedVehicle === vehicle && ( */}
            <div><p>Year: {vehicle.year}</p><p>Price per day: ${vehicle.price}</p><p>Availability: {vehicle.availability ? 'Available' : 'Not available'}</p></div>
          {/* )} */}
          <hr /></div>
      ))}
    </div>
  );
};

export default ProductInfo;