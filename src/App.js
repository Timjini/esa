import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Acceuil from './components/pages/Acceuil';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" extract component={Acceuil} />
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
