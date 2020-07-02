import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Container } from 'semantic-ui-react';
import HomePage from './HomePage';
import Floaters from './components/Floaters';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <HomePage />
      <Footer />
      <Floaters />
    </Container>
  );
}

export default App;
