import './App.css';
import { BrowserRouter as Router, Route, NavLink  } from "react-router-dom";

import styled from 'styled-components';
import Login from './Components/Login';
import Landing from './Components/Landing';
import SignUp from './Components/SignUp';

function App() {

  const logout = () => { localStorage.removeItem('token') }
  

  return (
    <div className={"App"}>
    <Router>
    <nav className={'Nav'}>
      <ul className={'NavList'}>
      <li>
      <NavLink exact to="/">
      Articles
      </NavLink>
      </li>
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
      <Button onClick={logout}>
      Logout
      </Button>
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

const Button = styled.button`
background-color: #424c55;
color:white;
width: 110px;
height: 35px;
border-radius:50px;
font-size: 1rem;
font-weight: 100;
letter-spacing:2px;
cursor: pointer;
`
