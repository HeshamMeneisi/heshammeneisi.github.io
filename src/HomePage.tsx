import * as React from 'react';
import {Divider, Grid, GridColumn, GridRow} from 'semantic-ui-react';
import AboutSection from './components/home/AboutSection';
import TechSkillsSection from './components/home/TechSkillsSection';

function HomePage(){
  return (
    <Grid padded="vertically">
      <GridRow>
        <GridColumn>
          <AboutSection />
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <TechSkillsSection />
        </GridColumn>
      </GridRow>
    </Grid>
  );
}

export default HomePage;
