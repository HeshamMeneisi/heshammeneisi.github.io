import React from 'react';
import TrackVisibility from 'react-on-screen';

import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  LabelDetail,
  Segment,
} from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import SvgIcon from '../SvgIcon';

interface ITechItem {
  name: string;
  icon: string;
  color?: string;
}

interface ITechSection {
  title: string;
  text: string;
  items: ITechItem[];
}

const sections: ITechSection[] = [
  {
    title: 'Data Science',
    text: 'I started my journey with Machine Learning and Data Scraping.',
    items: [
      { name: 'Python', icon: 'python', color: '#F9E668' },
      { name: 'R', icon: 'r', color: '#276DC3' },
      { name: 'Keras', icon: 'keras', color: '#D00000' },
      { name: 'Tensor-Flow', icon: 'tensorflow', color: '#FF6F00' },
      { name: 'Pandas', icon: 'pandora', color: '#224099' },
      { name: 'NLTK', icon: 'nintendo', color: '#aaa' },
      { name: 'InfluxDB', icon: 'influxdb', color: '#22ADF6' },
      { name: 'Spark', icon: 'apachespark', color: '#E25A1C' }
    ],
  },
  {
    title: 'DevOps',
    text:
      'I can take an application through all the CI/CD stages. ' +
      'Automated building, testing, release, deployment, metrics, and logs.',
    items: [
      { name: 'Docker', icon: 'docker', color: '#3A8DCB' },
      { name: 'K8s', icon: 'kubernetes', color: '#1E90FF' },
      { name: 'GitHub Act.', icon: 'githubactions', color: '#55f' },
      { name: 'Travis', icon: 'travisci', color: '#3EAAAF' },
      { name: 'AWS', icon: 'amazonaws', color: '#EC902D' },
      { name: 'Git', icon: 'git', color: '#E94E31' },
      { name: 'Kibana', icon: 'kibana', color: '#E9478A' },
      { name: 'Elasticsearch', icon: 'elasticsearch', color: '#DBB719' },
      { name: 'Slack Integ.', icon: 'slack', color: '#fcc' },
      { name: 'Grafana', icon: 'grafana', color: '#F46800' },
      { name: 'Azure', icon: 'azurepipelines', color: '#2560E0' },
    ],
  },
  {
    title: 'Backend',
    text:
      'I was contracted to do various types of APIs. ML, web, mobile, and auto-scrapers.',
    items: [
      { name: 'C#', icon: 'csharp', color: '#34a231' },
      { name: 'SDK', icon: 'dot-net', color: '#5C2D91' },
      { name: 'PHP', icon: 'php', color: '#777BB4' },
      { name: 'Laravel', icon: 'laravel', color: '#FF2D20' },
      { name: 'Lumen', icon: 'lumen', color: '#E74430' },
      { name: 'Python', icon: 'python', color: '#F9E668' },
      { name: 'Flask', icon: 'flask', color: '#fff' },
      { name: 'MySql', icon: 'mysql', color: '#4479A1' },
      { name: 'Postgre-SQL', icon: 'postgresql', color: '#336791' },
      { name: 'Mongo', icon: 'mongodb', color: '#47A248' },
      { name: 'OpenAPI', icon: 'openapiinitiative', color: '#6BA539' }
    ],
  },
  {
    title: 'Frontend',
    text: 'I have solid frontend experience in UI and UX design.',
    items: [
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'typescript', color: '#007ACC' },
      { name: 'Vue', icon: 'vue-dot-js', color: '#4FC08D' },
      { name: 'Vuetify', icon: 'vuetify', color: '#2a79D0' },
      { name: 'React', icon: 'react', color: '#61DAFB' },
      { name: 'Redux', icon: 'redux', color: '#764ABC' },
      { name: 'Material-UI', icon: 'material-ui', color: '#0081CB' },
      { name: 'Semantic-UI', icon: 'slides', color: '#888' },
      { name: 'Jest', icon: 'jest', color: '#C21325' },
      { name: 'ESLint', icon: 'eslint', color: '#4B32C3' }
    ],
  },
  {
    title: 'Other',
    text: 'A a Computer & Communication Engineer, I participated in some' +
      ' projects involving robotics, micro-controllers, and signal processing.',
    items: [
      // { name: 'ESLint', icon: 'eslint', color: '#4B32C3' }
    ]
  }
];

function renderItem(item: ITechItem, idx: number) {
  return (
    <Grid.Column key={idx}>
      <TrackVisibility once>
        {({ isVisible }) => (
          <Segment
            inverted
            padded
            textAlign="center"
            vertical
            style={{
              backgroundColor: 'transparent',
              opacity: 0,
              left: `${100 + idx * 10}px`,
              animation: isVisible ? `slide ${2 + idx * 0.07}s forwards, fadeIn 2s forwards` : '',
              animationDelay: isVisible ? '0.2s' : ''
            }}
          >
            <SvgIcon color={item.color} name={item.icon} light size="big" />
            <LabelDetail style={{ paddingTop: '10px' }}>{item.name}</LabelDetail>
          </Segment>
        )}
      </TrackVisibility>
    </Grid.Column>
  );
}

function renderSection(section: ITechSection, idx: number) {
  return (
    <Container text key={idx}>
      <HeaderSubHeader>{section.title}</HeaderSubHeader>
      <Divider fitted inverted />
      <Container
        text
        style={{ color: '#888', fontSize: '15px', paddingTop: '5px' }}
      >
        {section.text}
      </Container>
      <Grid padded columns="6" doubling>
        <Grid.Row>{section.items.map(renderItem)}</Grid.Row>
      </Grid>
    </Container>
  );
}

function TechSkillsSection() {
  return (
    <Segment inverted padded style={{ overflow: 'hidden' }}>
      <Header>
        <TrackVisibility once>
          {({ isVisible }) => (
            <Container style={{ opacity: 0,
              animation: isVisible ? 'slideInX 1s forwards, fadeIn 0.5s forwards' : '',
              animationDelay: isVisible ? '0.5s' : '' }}
            >
              <Icon
                name="code"
                color="green"
                style={{ animation: isVisible ? 'jiggle 2s' : '' }}
              />
              Tech Skills
            </Container>
          ) }
        </TrackVisibility>
      </Header>
      <Divider />
      <Container text>
        During my past projects, full-time, and consultancy positions, I mastered the
        following technologies to varying but all professionally competent
        degrees.
      </Container>
      <Divider hidden />
      {sections.map(renderSection)}
    </Segment>
  );
}

export default TechSkillsSection;
