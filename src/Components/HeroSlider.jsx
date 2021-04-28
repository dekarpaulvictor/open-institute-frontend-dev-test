import {Link} from 'react-router-dom';
import heroBg from '../images/hero-bg.jpg';

const HeroSlider = () => {
  return (
    <section 
    className="jumbotron jumbotron-fluid text-center"
    style={
      {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        height: '600px'
      }
    }
    >
      <div className="container mt-3 mt-sm-5 pt-3 pt-sm-5">
        <p className="lead text-light">
          Welcome to the Environment club! Click on this button to get you started.
        </p>
        <p className="lead">
          <Link className="btn btn-primary btn-sm rounded-pill px-4" to="/programmes">
            Quick Apply
          </Link>
        </p>
      </div>
    </section>
  );
}

export default HeroSlider;