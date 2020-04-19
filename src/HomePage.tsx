import * as React from 'react';
import {Divider, Grid, GridColumn, GridRow, Segment} from 'semantic-ui-react';
import AboutSection from './components/home/AboutSection';
import TechSkillsSection from './components/home/TechSkillsSection';

function HomePage() {
  return (
    <Grid padded="vertically">
      <Divider section hidden />
      <GridRow>
        <GridColumn>
          <AboutSection />
        </GridColumn>
      </GridRow>
      <Divider section hidden />
      <GridRow>
        <GridColumn>
          <TechSkillsSection />
        </GridColumn>
      </GridRow>
      <Divider section hidden />
    </Grid>
  );
}

export default HomePage;
