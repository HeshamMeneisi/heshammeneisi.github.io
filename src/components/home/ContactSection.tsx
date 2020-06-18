import React from 'react';
import {
  Container,
  Divider, Grid,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';
import TrackVisibility from 'react-on-screen';
import SvgIcon from '../SvgIcon';

function ContactSection() {
  return (
    <Segment inverted padded>
      <Header>
        <TrackVisibility once>
          {({ isVisible }) => (
            <Container style={{ opacity: 0,
              animation: isVisible ? 'slideInX 1s forwards, fadeIn 0.5s forwards' : '',
              animationDelay: isVisible ? '0.2s' : '' }}
            >
              <Icon
                name="paper plane"
                color="green"
                style={{
                  animation: isVisible ? 'jiggle 2s' : ''
                }}
              />
              Contact
            </Container>
          ) }
        </TrackVisibility>
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
              <TrackVisibility once>
                {({ isVisible }) => (
                  <Container style={{ opacity: 0, animation: isVisible ? 'flyIn 1s forwards' : '' }}>
                    <SvgIcon name="gmail" color="#D14836" />
                    <a style={{ color: 'white' }} href="mailto:heshammeneisi@gmail.com">heshammeneisi@gmail.com</a>
                  </Container>
                )}
              </TrackVisibility>
            </Grid.Column>
            <Grid.Column>
              <TrackVisibility once>
                {({ isVisible }) => (
                  <Container style={{ opacity: 0, animation: isVisible ? 'flyIn 1s forwards' : '',
                    animationDelay: isVisible ? '0.5s' : '' }}
                  >
                    <SvgIcon name="skype" color="#00AFF0" />
                    heshammeneisi
                  </Container>
                )}
              </TrackVisibility>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default ContactSection;
