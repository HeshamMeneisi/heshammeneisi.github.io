import { Button, Grid, Icon, Popup } from 'semantic-ui-react';
import React from 'react';
import SvgIcon from './SvgIcon';

function Floaters() {
  return (
    <Grid style={{ position: 'fixed', margin: '1em', bottom: '0px', left: '0px', zIndex: 6 }}>
      <Popup
        content='Github'
        size="mini"
        inverted
        position="top center"
        trigger={(
          <Button
            style={{ animation: 'hover 3s ease-in-out infinite' }}
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
            style={{ animation: 'hover 3s ease-in-out infinite', animationDelay: '1s' }}
            color="green"
            icon
            size="tiny"
            onClick={() => window.open('https://www.upwork.com/freelancers/~01c73274b9b99e8be7')}
          >
            <SvgIcon name="upwork" light />
          </Button>
        )}
      />
      <Popup
        content='LinkedIn'
        size="mini"
        inverted
        position="top center"
        trigger={(
          <Button
            style={{ animation: 'hover 3s ease-in-out infinite', animationDelay: '0.5s' }}
            color="blue"
            icon
            size="tiny"
            onClick={() => window.open('https://www.linkedin.com/in/hesham-meneisi')}
          >
            <SvgIcon name="linkedin" light />
          </Button>
        )}
      />
    </Grid>
  );
}

export default Floaters;
