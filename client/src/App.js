import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import NavBar from './components/NavBar';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Route path='/signup' component={Signup}></Route>
      </Router>
    </div>
  );
}

export default App;
