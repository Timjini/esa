import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Etudierenfrance from './components/pages/Etudierenfrance';
import Acceuil from './components/pages/Acceuil';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navigation />

      <Routes>
      <Route path='/' element={<Acceuil />} />
      <Route path='etudier-en-france' element={<Etudierenfrance />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
