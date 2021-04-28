import titleBg from '../images/img-1440x240.jpg';

const TitleBanner = ({title}) => {
  return (
    <section 
    className="jumbotron jumbotron-fluid d-flex p-3"
    style={
      {
        backgroundImage: `url(${titleBg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        height: '240px'
      }
    }
    >
      <h4 className="text-light mx-3 mx-sm-5 my-auto">{title}</h4>
    </section>
  );
}

export default TitleBanner;