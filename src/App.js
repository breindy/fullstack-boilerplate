import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import NavBar from './components/NavBar';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <h2>nullProjects</h2> */}
      <Signup/>
    </div>
  );
}

export default App;
