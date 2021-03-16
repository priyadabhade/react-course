import './App.css';
import React  from "react";
import User from './Users';
import About from './About';
import ListCreate from './CreateUser';
import Home from './Home';
import Contactus from './Contact';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import {Switch,Route} from 'react-router';
import {Navbar,Nav} from 'react-bootstrap';


function App() {
  
  return (
    <div className="App">
      <Router>
      
  <Navbar bg="dark" variant="dark">
    
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="./home">Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to="./about">About</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="./contactus">Contact us</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="./list">List Create</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="./user">User</Link></Nav.Link>
    </Nav>
    
  </Navbar>
  <Switch>
        <Route path="/about">
      <About />
    </Route>

    <Route path="/contactus">
      <Contactus />
    </Route>

    <Route exact path="/list">
      <ListCreate/>
      </Route>

      <Route exact path="/user">
      <User />
      </Route>
      
    
    <Route exact path="/">
      <Home />
          </Route>
  </Switch>
  </Router>
    </div>
  );
}

export default App;
