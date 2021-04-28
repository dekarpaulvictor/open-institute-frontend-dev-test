import {Link} from 'react-router-dom';
import signUpImage from '../images/img-700x740.jpg';
import '../App.css';

const SignUpForm = () => {
  return (
    <form 
      className="form-signin_up"
    >
      <h1 className="h3 mb-3 font-weight-normal">Register</h1>
      <label htmlFor="inputName" className="sr-only">Name</label>
      <input 
        id="inputName" 
        className="form-control" 
        placeholder="Name" required autofocus />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input 
        type="password" 
        id="inputPassword" 
        className="form-control mt-2 mt-sm-3" 
        placeholder="Password" required />
      <label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
      <input 
        type="password" 
        id="inputConfirmPassword" 
        className="form-control mt-2 mt-sm-3" 
        placeholder="Confirm Password" required />
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input 
        type="email" 
        id="inputEmail" 
        className="form-control" 
        placeholder="Email address" required autofocus />
      <Link className="btn btn-primary btn-sm rounded-pill mt-2 mt-sm-4 px-4" to="#">
        Register
      </Link>
      <div className="row mt-2 mt-sm-3">
        <span>
          <Link to="#">Sign up with Gmail</Link>
        </span>
        <span
          className="mx-3"
          style={
            {
            borderLeft: '1px solid #000000' 
            }
          }
        >
        </span>
        <span>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </span>
      </div>
    </form>
  );
}

const SignUpSection = () => {
  return (
    <section className="container">
      <div 
        className="row"
      >
        <div className="col-12 col-sm-6 my-auto">
          <SignUpForm />
        </div>
        <div 
          className="col-12 col-sm-6 d-none d-sm-block"
          style={
            {
              backgroundImage: `url(${signUpImage})`,
              backgroundSize: 'cover',
              height: '600px'
            }
          }
        >

        </div>
      </div>
    </section>
  );
}

export default SignUpSection;