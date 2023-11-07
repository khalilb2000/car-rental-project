// import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <div className="wheels-on-demand-page">
      <h1>Plan your trip now!!</h1>
      <button className="plan-trip-button">Plan Trip Now</button>

      <div className="section">
        <h2>Save with our car rental</h2>
        <p>Learn More > </p>
      </div>

      <div className="section">
        <h2>Book Ride</h2>
        <p>Learn More > </p>
      </div>
    </div>
  );
}

export default Home;
