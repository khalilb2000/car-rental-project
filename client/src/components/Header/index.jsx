import { Link} from 'react-router-dom';
// import Auth from '../../utils/auth';
import './navBar.css';
import carSVG from '../../assets/car-solid.svg';
import barsSVG from '../../assets/bars-solid.svg';

const svgStyle = {
  heigth: '2rem',
  width: '2rem',
}

export default function Header() {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };

// import Auth from '../../utils/auth';
// import carSVG from '../../assets/car-solid.svg';
// import barsSVG from '../../assets/bars-solid.svg';

const svgStyle = {
  heigth: '2rem',
  width: '2rem',
}
const styles = {
  letterStyle: {
   fontSize: '2rem',
   color: 'black'
  },
}

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };


  return (
    <header className="d-flex text-light mb-4 py-3 flex-row align-center">
      <div className="container justify-space-between-lg justify-center align-center">
        <div>
          <Link className="flex-row justify-space-between" to="/">
            <img src={carSVG} style= {svgStyle}/>
            <h1 className="m-0" style={styles.letterStyle}>WheelsOnDemand</h1>
            <img  src={barsSVG} style={svgStyle}/>
          </Link>
        </div>
        {/* <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div> */}
      </div>
    </header>
  );
}
}
