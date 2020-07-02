import { Button, Container, Modal } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';

function Footer() {
  const [dialog, setDialog] = useState(false);
  useEffect(() => {
    // TODO: change when using router
    if(window.location.search.indexOf('legal') > -1){
      setDialog(true);
    }
  });
  return (
    <Container
      textAlign="right"
      style={{
        'paddingBottom': '10px'
      }}
    >
      <Button
        inverted
        color="green"
        size="small"
        compact
        onClick={() => setDialog(true)}
      >
        Legal
      </Button>
      <Modal
        dimmer="blurring"
        open={dialog}
        onClose={() => setDialog(false)}
        style={{ height: '80%', animation: 'scaleIn 1s' }}
        closeIcon="close"
      >
        <Modal.Header>Legal Disclaimer</Modal.Header>
        <Modal.Content>
          <Container text style={{ 'paddingBottom': '10px', 'fontStyle': 'italic' }}>
            These terms apply to contracts signed directly by me. In case of using a middleman service (e.g. Upwork, Fiverr, etc) please refer to their policy.
          </Container>
          <Container textAlign="justified" text>
            Any deposit payment specified in your contract is non-refundable and any refunds made regarding this deposit are at my discretion. Requests for refunds, after the deposit payment’s associated Milestone Tasks have been achieved, must be presented to me in writing or through the e-mail address you used to submit the digitally signed contract. Refund requests must be made prior to me receiving written or verbal authorization or approval of acceptance of services performed. In the event that the deposit amount does not fully cover the development time spent on the project (as specified on the contract and with a minimum of $40/hr), and other expenses related to development of the project, an additional payment will be due. Please refer to the specific details found in your project proposal and agreement.
          </Container>
          <Container text style={{ 'paddingTop': '10px' }}>
            All refund requests must be received from the e-mail used to communicate and/or submit the digitally sigend contract.
          </Container>
          <Container text style={{ 'paddingTop': '20px' }}>
            <h4>Non-refundable Services:</h4>
            The following payments are not refundable.
            <br />
            * Payments made for Milestone Achievements
            <br />
            * Payments made for Website/Software Maintenance
            <br />
            * Payments made for Application (software) Development
            <br />
            * Payments made based on an agreed-upon hourly tracking method.
          </Container>
          <Container text style={{ 'paddingTop': '20px' }}>
            <h4 style={{ 'paddingBottom': '10px' }}>How Refunds Are Processed</h4>
            Unless your contract states otherwise, payments made to me by credit card, Payoneer, or PayPal will be refunded to the card or account that the payment was made with. Cash or Check payments will be refunded by Check only.
          </Container>
        </Modal.Content>
      </Modal>
    </Container>
  );
}

export default Footer;
