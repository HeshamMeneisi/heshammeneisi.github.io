import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import AboutSection from './components/home/AboutSection';

function HomePage(){
  return (
    <Grid>
      <Grid.Row>
        <AboutSection />
      </Grid.Row>
    </Grid>
  );
}

export default HomePage;
