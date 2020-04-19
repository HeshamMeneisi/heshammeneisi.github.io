import React from 'react';
import { Container, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';

function AboutSection(){
  return (
    <Segment inverted padded>
      <Header>
        <Icon name="terminal" color="green" />
        About Me
      </Header>
      <Divider />
      <Container text>
        Hello, my name is
        {' '}
        <b>Hesham Meneisi</b>
        , and this is my brief Portfolio for interested contractors or recruiters.
        I do not update my availability here, so feel free to contact me any time to check.
      </Container>
      <br />
      <Container text>
        As a tried and true full-stack developer, I am comfortable taking a project from the drawing board through to deployment.
        I am comfortable doing so as a Senior Developer, a Tech Lead, a Project Manager or a Product Owner.
        Ultimately, I believe that the phrase
        {' "'}
        jack of all trades, master of none
        {'" '}
        is a false dichotomy.
        You can master as many trades as you want, if you put in the necessary effort to become professionally competent.
      </Container>
      <br />
      <Container text>
        In my professional life, I have been an intern, a part-timer, a full-timer,
        and most importantly, a freelancer.
        Freelancing often pushed me out of my comfort zone
        and forced me to experience different verticals and different technology stacks within those.
      </Container>
      <br />
      <Container text>
        In the following sections I will detail my experience more thoroughly.
        I have not listed any verticals or technologies where I do not feel fully professionally competent yet.
      </Container>
    </Segment>
  );
}

export default AboutSection;
