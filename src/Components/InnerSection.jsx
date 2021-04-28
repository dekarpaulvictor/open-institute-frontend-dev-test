import {Link} from 'react-router-dom';
import bgImage from '../images/img-440x240.jpg';

const InnerSection = ({headingTitle, buttonTitle, buttonLink}) => {
  return (
    <div className="container p-2 p-sm-5">
      <div className="row">
        <div 
          className="col-12 col-md-6"
          style={
            {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              height: '240px'
            }
          }
        >          
        </div>
        <div className="col-12 col-md-6 p-3 p-sm-5">
          <h5 className="text-muted">{headingTitle}</h5>
          <p>
            Lacus, quis arcu nibh id et phasellus ut elementum. 
            Lobortis sodales commodo amet facilisi cras velit 
            hendrerit praesent ultrices. At metus ac.
          </p>
          <Link className="btn btn-primary btn-sm rounded-pill px-4" to={buttonLink}>
            {buttonTitle}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InnerSection;