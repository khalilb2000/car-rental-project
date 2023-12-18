import gitHub from '../img/github.svg';
// import stackOverFlow from '../img/stack-overflow.svg';
import linkedIn from '../img/linkedin.svg';

const Footer = () => {

  return (
    <footer className="d-flex flex-wrap justify-content-around align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <img />
        </a>
        <span className="text-muted">© 2023 Company, Inc</span>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex gap-4">
        <li>
          <a href="https://github.com/Ch40s1 " target="blank">
            <img
              src={gitHub}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </a>
        </li>
        <li >
          <a href="https://www.linkedin.com/in/daniel-zarate-66816113b/" target="blank">
            <img
              src={linkedIn}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </a>
        </li>
        {/* <li>
          <img
            src={stackOverFlow}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </li> */}
      </ul>
    </footer>
  );
};

export default Footer;
