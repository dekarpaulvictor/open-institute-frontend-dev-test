import TourCard from './TourCard';

const TourCardRow = ({captions}) => {
  return (
    <div className="container mt-n5">
      <div className="row">
        <div className="col-12 col-sm-3">
          <TourCard caption={captions[0]} />
        </div>
        <div className="col-12 col-sm-3">
          <TourCard caption={captions[1]} />
        </div>
        <div className="col-12 col-sm-3">
          <TourCard caption={captions[2]} />
        </div>
        <div className="col-12 col-sm-3">
          <TourCard caption={captions[3]} />
        </div>
      </div>
    </div>
  );

}

export default TourCardRow;