import {Link} from 'react-router-dom';
import signInImage from '../images/img-700x740.jpg';
import '../App.css';

const SignInForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form 
      className="form-signin_up"
      onSubmit={handleSubmit}
    >
      <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input 
        type="email" 
        id="inputEmail" 
        className="form-control" 
        placeholder="Email address" required autoFocus />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input 
        type="password" 
        id="inputPassword" 
        className="form-control mt-2 mt-sm-3" 
        placeholder="Password" required />
      <button 
        type="submit" 
        className="btn btn-primary btn-sm rounded-pill mt-2 mt-sm-4 px-4"
      >
        Sign in
      </button>
      <div className="row mt-2 mt-sm-3">
        <span>
          <Link to="#">Forgot password?</Link>
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
          <Link to="/sign-in">Register</Link>
        </span>
      </div>
    </form>
  );
}

const SignInSection = () => {
  return (
    <section className="container">
      <div 
        className="row"
      >
        <div className="col-12 col-sm-6 my-auto">
          <SignInForm />
        </div>
        <div 
          className="col-12 col-sm-6 d-none d-sm-block"
          style={
            {
              backgroundImage: `url(${signInImage})`,
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

export default SignInSection;