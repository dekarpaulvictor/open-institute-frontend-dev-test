import {useEffect} from 'react';
import {
  SignInSection
} from '../Components';

const SignIn = ({title}) => {

  // render page title when component is fully rendered
  useEffect(() => {
    document.title = title;
  });

  return (
    <SignInSection />
  );
}

export default SignIn;