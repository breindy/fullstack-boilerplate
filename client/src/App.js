import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Router>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/about" exact><About/></Route>
          <Route path='/signup' exact><Signup/></Route>
          <Route path='/' component={Error}></Route>
        </Switch>
      </Router> */}
      
    </div>
  );
}

export default App;
