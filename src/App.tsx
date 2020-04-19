import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Button, Container, Grid, Icon } from 'semantic-ui-react';
import HomePage from './HomePage';

function App() {
  return (
    <Container>
      <HomePage />
      <Grid style={{ position: 'fixed', margin: '1em', bottom: '0px', left: '0px',
        animation: 'hover 3s ease-in-out infinite', zIndex: 6 }}
      >
        <Button
          color="grey"
          size="tiny"
          onClick={() => window.open('https://github.com/heshammeneisi')}
        >
          <Icon name="github" />
          Github
        </Button>
      </Grid>
    </Container>
  );
}

export default App;
