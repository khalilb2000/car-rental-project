// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// // import ThoughtForm from '../components/ThoughtForm';
// // import ThoughtList from '../components/ThoughtList';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

const ProductInfo = () => {
    // const { loading, data } = useQuery(QUERY_THOUGHTS);
    // const thoughts = data?.thoughts || [];
  
    return (
      <div className="select-a-car">
        <div className="section">
          <h2>Select One:</h2>
        </div>

      {/* show the sedan option */}
        <div className="sedan">
          <h3 className="card-header">Sedan</h3>
          <img> </img>
        </div>
  
        <button className="book-ride">Book Ride</button>

        {/* show the truck option */}
        <div className="truck">
          <h3 className="card-header">Truck</h3>
          <img> </img>
        </div>
  
        <button className="book-ride">Book Ride</button>

        {/* show the van option */}
        <div className="minivan">
          <h3 className="card-header">Minivan</h3>
          <img> </img>
        </div>
  
        <button className="book-ride">Book Ride</button>

        {/* show the sports car option */}
        <div className="sports-car">
          <h3 className="card-header">Sports Car</h3>
          <img> </img>
        </div>
  
        <button className="book-ride">Book Ride</button>


        {/* show the moving truck option */}
        <div className="moving-truck">
          <h3 className="card-header">Moving Truck</h3>
          <img> </img>
        </div>
  
        <button className="book-ride">Book Ride</button>

      </div>
    );
  }
  
  export default ProductInfo;