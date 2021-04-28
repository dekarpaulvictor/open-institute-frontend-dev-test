import {useEffect} from 'react';
import {
  HeroSlider, 
  TourCardRow,
  InnerSection, 
  InnerSectionReversed, 
  Testimonial,
  Partners
} from '../Components';

const Home = ({title}) => {

  // render page title when component is fully rendered
  useEffect(() => {
    document.title = title;
  });

  // captions for tourcards
  const captions = [
    "zanzibar spice tour",
    "slave trade tour",
    "mwalimu nyerere tour",
    "kigali rememberance tour"
  ]

  return (
    <div>
      <HeroSlider />
      <TourCardRow captions={captions} />
      <InnerSection headingTitle="About" buttonTitle="View More" buttonLink="/about" />
      <InnerSectionReversed headingTitle="Programmes" buttonTitle="View More" buttonLink="/programmes" />
      <InnerSection headingTitle="Registration" buttonTitle="Register" buttonLink="/register" />
      <Testimonial />
      <Partners />
    </div>
  );
}

export default Home;