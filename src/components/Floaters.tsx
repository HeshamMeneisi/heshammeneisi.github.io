import { Button, Grid, Icon, Modal, Popup } from 'semantic-ui-react';
import React, { useState } from 'react';
import SvgIcon from './SvgIcon';

function Floaters() {
  const [dialog, setDialog] = useState(false);

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
      <Popup
        content='Resume'
        size="mini"
        inverted
        position="top center"
        trigger={(
          <Button
            style={{ animation: 'hover 3s ease-in-out infinite', animationDelay: '1s' }}
            color="red"
            icon
            size="tiny"
            onClick={() => setDialog(true)}
          >
            <Icon name="google drive" />
          </Button>
        )}
      />
      <Modal
        dimmer="blurring"
        open={dialog}
        onClose={() => setDialog(false)}
        style={{ height: '80%', animation: 'scaleIn 1s' }}
      >
        <Modal.Header>My Resume</Modal.Header>
        <iframe
          title="Resume"
          width="100%"
          height="100%"
          frameBorder={0}
          allowFullScreen
          scrolling="test"
          src="https://docs.google.com/document/d/e/2PACX-1vTCcFhTHHdNQEeDNrJn7odf4kK2CoXXaS1OOs9gi_0KDfcQn3ZS_CjmdGI9bmMrxX5iZpAb2jePhf-a/pub?embedded=true"
        />
      </Modal>
    </Grid>
  );
}

export default Floaters;
