import * as React from 'react';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
import AboutSection from './components/home/AboutSection';

function HomePage(){
  return (
    <Grid padded="vertically">
      <GridRow>
        <GridColumn>
          <AboutSection />
        </GridColumn>
      </GridRow>
    </Grid>
  );
}

export default HomePage;
