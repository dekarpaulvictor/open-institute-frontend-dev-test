import {useEffect} from 'react';
import {
  SignUpSection
} from '../Components';

const Register = ({title}) => {

  // render page title when component is fully rendered
  useEffect(() => {
    document.title = title;
  });

  return (
    <SignUpSection />
  );
}

export default Register;