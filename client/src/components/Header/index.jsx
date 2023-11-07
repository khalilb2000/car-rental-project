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


  return (
    <>
      <header className="navBarContainer">
          <Link className="logo sm-col-3 md-col-5 lg-col-6" to="/">
            <img src={carSVG} className="logo" alt="Car" style={svgStyle} />
            <h1 className="title">WheelsOnDemand</h1>
            {/* <img src={barsSVG} className="bars" alt="Bars" style={svgStyle} /> */}
          </Link>
          <img src={barsSVG} className="bars" alt="Bars" style={svgStyle} />
        <div className='navBtn lg-col-6'>
          <Link to="/about" className="link" activeClassName="active">
            About
          </Link>
          <Link to="/home" className="link" activeClassName="active">
            Home
          </Link>
          <Link to="/contact" className="link" activeClassName="active">
            Contact us
          </Link>
          <Link to="/login" className="link" activeClassName="active">
            Login
          </Link>
          <Link to="/logout" className="link" activeClassName="active">
            Logout
          </Link>
        </div>
      </header>
    </>
  );
};
