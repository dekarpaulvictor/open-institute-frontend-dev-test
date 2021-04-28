import partnerLogo from '../images/img-170x90.jpg';

const Partners = () => {
  return (
    <div className="container text-center p-2 p-sm-5 mx-auto">
      <h5 className="text-muted mb-3 mb-sm-5">Our Partners</h5>
      <div 
        className="row d-flex justify-content-center"
        style={
          {
            height: '100px'
          }
        }
      >
        <div className="col-6 col-sm-4 col-md-2 text-center">
          <img src={partnerLogo} alt=""/>
        </div>
        <div className="col-6 col-sm-4 col-md-2 text-center">
          <img src={partnerLogo} alt=""/>
        </div>
        <div className="col-6 col-sm-4 col-md-2 text-center">
          <img src={partnerLogo} alt=""/>
        </div>
        <div className="col-6 col-sm-4 col-md-2 text-center">
          <img src={partnerLogo} alt=""/>
        </div>
        <div className="col-6 col-sm-4 col-md-2 text-center">
          <img src={partnerLogo} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Partners;