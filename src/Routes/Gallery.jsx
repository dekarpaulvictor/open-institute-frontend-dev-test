import {useEffect} from 'react';

const Gallery = ({title}) => {
  
  // render page title when component is fully rendered
  useEffect(() => {
    document.title = title;
  });

  return (
    <div 
      className="container d-flex flex-column align-items-center"
      style={
        {
          height: '600px'
        }
      }
    >
      <h2 className="m-auto text-muted">{title}</h2>
    </div>
  );
}

export default Gallery;