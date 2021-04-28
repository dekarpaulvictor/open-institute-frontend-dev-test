import heroBg from '../images/hero-bg.jpg';

const HeroSlider = () => {
  return (
    <section 
    className="jumbotron jumbotron-fluid text-center"
    style={
      {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'scroll',
        height: '600px'
      }
    }
    >
    </section>
  );
}

export default HeroSlider;