// import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <div className="wheels-on-demand-page">
      <div className="section">
        <h5>Plan your trip now!</h5>
      </div>
      <div className="text">
        <h1>SAVE with our car rental</h1>
      </div>
      <div className="button-section">
      </div>
      <button className="book-ride-button">Book Ride</button>
      <button className="learn-more-button ml-4">Learn More</button>
    </div>
  );
}

export default Home;
