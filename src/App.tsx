import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Button, Container, Grid, Icon, Popup } from 'semantic-ui-react';
import HomePage from './HomePage';
import SvgIcon from './components/SvgIcon';

function App() {
  return (
    <Container>
      <HomePage />
      <Grid style={{ position: 'fixed', margin: '1em', bottom: '0px', left: '0px',
        animation: 'hover 3s ease-in-out infinite', zIndex: 6 }}
      >
        <Popup
          content='Github'
          size="mini"
          inverted
          position="top center"
          trigger={(
            <Button
              icon
              size="tiny"
              onClick={() => window.open('https://github.com/heshammeneisi')}
            >
              <Icon name="github" color="black" />
            </Button>
          )}
        />
        <Popup
          content='Upwork'
          size="mini"
          inverted
          position="top center"
          trigger={(
            <Button
              color="green"
              icon
              size="tiny"
              onClick={() => window.open('https://www.upwork.com/freelancers/~01c73274b9b99e8be7')}
            >
              <SvgIcon name="upwork" light />
            </Button>
          )}
        />
      </Grid>
    </Container>
  );
}

export default App;
