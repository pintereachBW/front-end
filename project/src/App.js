import './App.css';
import { BrowserRouter as Router, Route, NavLink  } from "react-router-dom";

import Login from './Components/Login';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className={"App"}>
    <Router>
    <nav className={'Nav'}>
      <ul className={'NavList'}>
      <li>
      <NavLink to="/Login">
      Login
      </NavLink>
      </li>
      <li>
      <NavLink to="/SignUp">
      Sign-Up
      </NavLink>
      </li>
      <li>
      <NavLink exact to="/">
      Landing
      </NavLink>
      </li>
      </ul>
    </nav>
    <Route 
    exact path="/"
    component={Landing}
    />
    <Route 
    exact path="/Login"
    component={Login}
    />
    <Route 
    exact path="/SignUp"
    component={SignUp}
    />
    </Router>
    </div>
  );
}

export default App;
