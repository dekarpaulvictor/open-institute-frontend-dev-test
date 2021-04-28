import bgImage from '../images/img-260x320.jpg';

const TourCard = ({caption}) => {
  return (
    <div className="card">
      <img src={bgImage} className="card-img-top" alt={caption} />
      <div className="card-body">
        <p 
          className="card-text"
          style={
            {
              textAlign: 'center',
              textTransform: 'uppercase'
            }
          }
        >
          {caption}
        </p>
      </div>
    </div>
  );
}

export default TourCard;
