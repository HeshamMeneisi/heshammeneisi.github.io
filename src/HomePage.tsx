import * as React from 'react';
import { Container, Divider, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import AboutSection from './components/home/AboutSection';
import TechSkillsSection from './components/home/TechSkillsSection';
import ContactSection from './components/home/ContactSection';

function HomePage() {
  return (
    <Container style={{ paddingBottom: '32px' }}>
      <Grid>
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
        <GridRow>
          <GridColumn>
            <ContactSection />
          </GridColumn>
        </GridRow>
        <Divider section hidden />
      </Grid>
    </Container>
  );
}

export default HomePage;
