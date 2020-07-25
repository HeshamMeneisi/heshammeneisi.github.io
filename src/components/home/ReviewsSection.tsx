import React, { useEffect, useState } from 'react';
import {
  Container,
  Divider, Grid,
  Header,
  Icon,
  Segment, Table, TableBody, TableCell, TableFooter, TableRow,
} from 'semantic-ui-react';
import TrackVisibility from 'react-on-screen';
import SvgIcon from '../SvgIcon';

interface IReview {
  text: string;
  signature?: string;
  isFromUpwork?: boolean;
  flag?: string;
}

const reviews: IReview[] = [
  {
    text: 'Hesham quickly identified the problem we were having, and quickly solved it. Will look forward to working with him again in the near future.',
    signature: 'Upwork Client',
    isFromUpwork: true
  },
  {
    text: 'Very strong technical skills. Knows his stuff. Really good communicator as well! Highly recommended!',
    signature: 'Upwork Client',
    isFromUpwork: true
  },
  {
    text: 'It was a pleasure to work with Hesham. He was very efficient, dedicated and got the job done ahead of time. I would highly recommended him!!',
    signature: 'Upwork Client',
    isFromUpwork: true
  },
  {
    text: 'The freelancer was very good. He did what I wanted in a timely matter. Thanks.',
    signature: 'Upwork Client',
    isFromUpwork: true
  },
  {
    text: 'Job was done exactly how I needed. Much appreciated.',
    signature: 'Upwork Client',
    isFromUpwork: true
  },
  {
    text: 'Hesham did great work, the project turned out better than expected.',
    signature: 'Upwork Client',
    isFromUpwork: true
  },
  {
    text: 'One of the best leads we have worked with on Upwork in 2018. Did exactly what we asked him to do like a PRO in no time.',
    signature: 'Upwork Client',
    isFromUpwork: true
  },
  {
    text: 'Hesham was great. High quality work and very fast turnaround. Will definitely look forward to working with him again on future projects!',
    signature: 'Upwork Client',
    isFromUpwork: true
  },
  {
    text: 'Hesham was responsive and clearly understood the goals of the project. He delivered the completed work a day earlier than the two day target and did so with high quality. I look forward to working with him again soon!',
    signature: 'Upwork Client',
    isFromUpwork: true
  },
];

function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [inTransition, setInTransition] = useState(false);

  useEffect(() => {
    function next() {
      setInTransition(true);
      setTimeout(()=>{
        setInTransition(false);
        setCurrentReview((currentReview + 1) % reviews.length);
      }, 350);
    }
    const interval = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentReview]);

  function renderReview(review: IReview, idx: number) {
    return currentReview === idx && (

      <Table
        key={idx}
        style={{ minHeight: '300px', maxWidth: 'min(70vw, 500px)',
          animation: inTransition ? 'flyOutLeft 1s forwards' : 'flyInRight 1s forwards' }}
        inverted
        unstackable
      >
        <TableBody className="middle aligned">
          <TableRow>
            <TableCell>
              <Container text textAlign="center" style={{ fontSize: '20px' }}>
                {review.text}
              </Container>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow style={{ paddingRight: '10px' }}>
            <TableCell style={{ paddingBottom: '40px' }} textAlign="right">
              {review.isFromUpwork ? (<SvgIcon name="upwork" color="#00ee00" />
              ) : `~${  review.signature}`}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

    );
  }

  return (
    <Segment inverted padded style={{ overflow: 'hidden' }}>
      <Header>
        <TrackVisibility once>
          {({ isVisible }) => (
            <Container style={{ opacity: 0,
              animation: isVisible ? 'slideInX 1s forwards, fadeIn 0.5s forwards' : '',
              animationDelay: isVisible ? '0.2s' : '' }}
            >
              <Icon
                name="star"
                color="green"
                style={{
                  animation: isVisible ? 'jiggle 2s' : ''
                }}
              />
              Reviews
            </Container>
          ) }
        </TrackVisibility>
      </Header>
      <Divider />
      <Grid centered padded>
        {reviews.map(renderReview)}
      </Grid>
    </Segment>
  );
}

export default ReviewsSection;
