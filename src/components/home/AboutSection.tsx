import React from 'react';
import {
  Container,
  Divider,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';
import TrackVisibility from 'react-on-screen';

function AboutSection() {
  return (
    <Segment inverted padded>
      <Header>
        <TrackVisibility once>
          {({ isVisible }) => (
            <Container style={{ opacity: 0,
              animation: isVisible ? 'slideInX 1s forwards, fadeIn 0.5s forwards' : '' }}
            >
              <Icon
                name="terminal"
                color="green"
                style={{ animation: isVisible ? 'jiggle 2s' : '' }}
              />
              About Me
            </Container>
          ) }
        </TrackVisibility>
      </Header>
      <Divider />
      <Container style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <Container text>
          Hello, my name is
          {' '}
          <b>Hesham Meneisi</b>
          , and this is my brief Portfolio
          for interested contractors or recruiters. I do not update my
          availability here, so feel free to contact me any time to check.
        </Container>
        <br />
        <Container text>
          As a tried and true full-stack developer, I am comfortable taking a
          project from the white board through to deployment. Ultimately, I believe that the phrase
          {' "'}
          jack of all trades, master of none
          {'" '}
          is a false dichotomy. You can master as many trades as you want, if you
          put in the necessary effort to become professionally competent.
        </Container>
        <br />
        <Container text>
          In my professional life, I have been an intern, a part-timer, a
          full-timer, and most importantly, a freelancer. Freelancing often pushed
          me out of my comfort zone and forced me to experience different
          verticals and different technology stacks within those.
        </Container>
        <br />
        <Container text>
          In the following sections I will detail my experience more thoroughly. I
          have not listed any verticals or technologies where I do not feel fully
          professionally competent yet.
        </Container>
      </Container>
    </Segment>
  );
}

export default AboutSection;
