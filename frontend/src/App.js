import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'

import Routes from './routes/routes'
import Menu from './template/Menu'

function App() {
  return (
    <div>
      <Container>
        <Menu />
        <Routes />
      </Container>
    </div>
  );
}

export default App;
