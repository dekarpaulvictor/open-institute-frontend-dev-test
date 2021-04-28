import clientPic from '../images/img-440x290.jpg';

const Partners = () => {
  return (
    <div
      className="p-3 p-sm-5"
      style={
        {
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }
      }
    >
    <div className="container p-3 p-sm-5">
      <div className="row">
        <div 
          className="col-12 col-md-6"
          style={
            {
              height: '300px'
            }
          }
        >          
          <img 
            src={clientPic}
            alt=""
            className="rounded"
          />
        </div>
        <div className="col-12 col-md-6 p-5">
          <blockquote class="blockquote">
            <p class="mb-3">
            Lacus, quis arcu nibh id et phasellus ut elementum. 
            Lobortis sodales commodo amet facilisi cras velit 
            hendrerit praesent ultrices. At metus ac.
            </p>l
            <footer class="blockquote-footer">
              Happy student from 
              <cite title="Source Title">Drama Club</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Partners;