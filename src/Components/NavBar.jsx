import { Link, withRouter } from 'react-router-dom';
import logo from '../images/logo.png';
import logoDark from '../images/logo-dark.png';

const NavBar = (props) => {

  // Get current route so we can determine which menu item
  // to assign bootstrap's `active` class courtesy of the
  // `withRouter` import.
  // `withRouter` is used to wrap this component before export.
  // See final line.
  const currentRoute = props.location.pathname;

  // Using react router's <Link /> component instead of <a> tags
  // to define menu items
  return (
    <div className="container-fluid">
      <nav
        className={
          `navbar navbar-expand-lg 
          ${
            currentRoute === '/' ?
             "navbar-dark fixed-top" : "navbar-light bg-light"
          }
          my-2 my-md-0`
        }
      >
        <Link className="navbar-brand" to="/">
          <img 
            src={currentRoute === '/' ? logoDark : logo}
            alt="Open Institute University Logo"
            width="78px"
            height="78px"
          >
          </img>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li 
              className={
                `nav-item ${currentRoute === '/about' ? "active" : ""}`
              }
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li 
              className={
                `nav-item ${currentRoute === '/programmes' ? "active" : ""}`
              }
            >
              <Link className="nav-link" to="programmes">
                Programmes
              </Link>
            </li>
            <li 
              className={
                `nav-item ${currentRoute === '/cohorts' ? "active" : ""}`
              }
            >
              <Link className="nav-link" to="/cohorts">
                Cohorts
              </Link>
            </li>
            <li 
              className={
                `nav-item ${currentRoute === '/gallery' ? "active" : ""}`
              }
            >
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
          <div className="my-2 my-md-0 mr-md-3">
            <Link className="btn btn-primary btn-sm rounded-pill mr-2 px-4" to="/sign-in">
              Sign in
            </Link>
            <Link className="btn btn-primary btn-sm rounded-pill px-4" to="/register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Wrap with `withRouter` to make sure component has access
// to react router's `location` properties
export default withRouter(NavBar);