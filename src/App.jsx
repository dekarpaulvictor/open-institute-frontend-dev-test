import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavBar, Footer} from './Components';
import {Home, About, Programmes, Cohorts, Gallery, SignIn, Register} from './Routes';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <Home title="Home" />} />
          <Route path="/about" exact component={() => <About title="About" />} />
          <Route path="/programmes" exact component={() => <Programmes title="Programmes" />} />
          <Route path="/cohorts" exact component={() => <Cohorts title="Cohorts" />} />
          <Route path="/gallery" exact component={() => <Gallery title="Gallery" />} />
          <Route path="/sign-in" exact component={() => <SignIn title="Sign in" />} />
          <Route path="/register" exact component={() => <Register title="Register" />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
