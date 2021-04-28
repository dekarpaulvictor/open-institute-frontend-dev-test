import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <div
      className="p-3 p-sm-5"
      style={
        {
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }
      }
    >
      <footer className="container">
        <div className="row mx-auto">
          <div className="col-12 col-sm-6 col-md mt-4">
            <Link to="/">
              <img 
                src={logo} 
                alt="Open Institute University Logo"
                width="96px"
                height="96px"
                className="m-auto"
              >
              </img>
          </Link>
          </div>
          <div className="col-12 col-sm-6 col-md mt-4">
            <h5>Quick links</h5>
            <ul className="nav flex-column text-small">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/programmes">
                  Programmes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cohorts">
                  Cohorts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md mt-4">
            <h5>Contact us</h5>
            <ul className="list-unstyled text-small">
              <li className="text-muted px-3 py-2">
                <span className="bi bi-geo-alt-fill mr-3"> 
                </span>
                Nairobi CBD
              </li>
              <li className="text-muted px-3 py-2">
                <span className="bi bi-envelope-fill mr-3"> 
                </span>
                info@oiu.ac.ke
              </li>
              <li className="text-muted px-3 py-2">
                <span className="bi bi-telephone-fill mr-3"> 
                </span>
                +254 700123456
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md mt-4">
            <h5>Connect</h5>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="bi bi-linkedin"
                  style={{fontSize: '1.8rem'}}>
                  </span>
                </Link>
              </li>            
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="bi bi-facebook"
                  style={{fontSize: '1.8rem'}}>
                  </span>
                </Link>
              </li>            
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="bi bi-twitter"
                  style={{fontSize: '1.8rem'}}>
                  </span>
                </Link>
              </li>            
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;