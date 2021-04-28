const IntroSectionWithVid = ({introText, vidUrl}) => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <p>
            {introText}
          </p>

        </div>
        <div className="col-12 col-md-6 mb-5 mt-n5">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe 
              className="embed-responsive-item"
              src={vidUrl} 
              allowfullscreen
              title="intor-vid">
            </iframe>
          </div>
        </div>
      </div>
    </section>

  );
}

export default IntroSectionWithVid;