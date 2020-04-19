import React from 'react';
import {
  Container,
  Divider, Grid,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';
import SvgIcon from '../SvgIcon';

function ContactSection() {
  return (
    <Segment inverted padded>
      <Header>
        <Icon name="paper plane" flipped="horizontally" color="green" />
        Contact
      </Header>
      <Divider />
      <Container text>
        <Grid columns="equal">
          <Grid.Row>
            You can contact me directly through my email (preferred method) or send me a message.
            You might also contact me on Upwork, although I prefer direct contact.
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <SvgIcon name="gmail" color="#D14836" />
              <a style={{ color: 'white' }} href="mailto:heshammeneisi@gmail.com">heshammeneisi@gmail.com</a>
            </Grid.Column>
            <Grid.Column>
              <SvgIcon name="skype" color="#00AFF0" />
              heshammeneisi
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default ContactSection;
