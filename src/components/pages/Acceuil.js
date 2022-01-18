import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Hero from '../Hero';
import Form from '../Form';
import Pays from '../Pays';
import Programs from '../Programs';

function Acceuil() {
  return (
    <>
      <Hero />
      <Programs />
      <Pays />
      <Form />
      <Footer />
    </>
  );
}

export default Acceuil;