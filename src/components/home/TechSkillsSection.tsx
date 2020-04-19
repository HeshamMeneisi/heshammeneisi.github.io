import React from 'react';
import { Card, CommentText, Container, Divider, Grid, Header, Icon, LabelDetail, Segment } from 'semantic-ui-react';
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
      { name: 'Kears', icon: 'keras', color: '#D00000' },
      { name: 'TensorFlow', icon: 'tensorflow', color: '#FF6F00' },
      { name: 'Pandas', icon: 'pandora', color: '#224099' },
      { name: 'NLTK', icon: 'nintendo', color: '#aaa' },
      { name: 'InfluxDB', icon: 'influxdb', color:'#22ADF6'},
      { name: 'Spark', icon: 'apachespark', color: '#E25A1C'}
    ]
  },
  {
    title: 'DevOps',
    text: 'I can take an application through all the CI/CD stages. ' +
      'Automated building, testing, release, deployment, metrics, and logs.',
    items: [
      { name: 'Docker', icon: 'docker', color: '#3A8DCB' },
      { name: 'K8s', icon: 'kubernetes', color: '#1E90FF' },
      { name: 'GitHub Act.', icon: 'githubactions', color: '#55f' },
      { name: 'Travis', icon: 'travisci', color: '#3EAAAF' },
      { name: 'AWS', icon: 'amazonaws', color: '#EC902D' },
      { name: 'Git', icon: 'git', color: '#E94E31' },
      { name: 'ESLint', icon: 'eslint', color: '#4B32C3' },
      { name: 'Kibana', icon: 'kibana', color: '#E9478A' },
      { name: 'Slack Integ.', icon: 'slack', color: '#fcc' },
      { name: 'Grafana', icon: 'grafana', color: '#F46800' },
      { name: 'Azure', icon: 'azurepipelines', color: '#2560E0'}
    ]
  },
  {
    title: 'Backend',
    text: 'I was contracted to do various types of APIs. ML, web, mobile, and auto-scrapers.',
    items: [
      { name: 'C#', icon: 'csharp', color: '#34a231' },
      { name: 'SDK', icon: 'dot-net', color: '#5C2D91' },
      { name: 'PHP', icon: 'php', color: '#777BB4' },
      { name: 'Laravel', icon: 'laravel', color: '#FF2D20' },
      { name: 'Lumen', icon: 'lumen', color:'#E74430'},
      { name: 'Python', icon: 'python', color: '#F9E668' },
      { name: 'Flask', icon: 'flask', color: '#fff' }
    ]
  },
  {
    title: 'Frontend',
    text: 'I have solid frontend experience in UI and UX design.',
    items: [
      { name: 'Vue', icon: 'vue-dot-js', color: '#4FC08D' },
      { name: 'Vuetify', icon: 'vuetify', color: '#2a79D0' },
      { name: 'React', icon: 'react', color: '#61DAFB' },
      { name: 'Redux', icon: 'redux', color: '#764ABC' },
      { name: 'Material-UI', icon: 'material-ui', color: '#0081CB' },
      { name: 'Semantic-UI', icon: 'slides', color:'#888'}
    ]
  }
];

function renderItem(item: ITechItem, idx: number) {
  return (
    <Grid.Column key={idx}>
      <Segment color="black" inverted padded textAlign="center">
        <SvgIcon color={item.color} name={item.icon} light size="big" />
        <LabelDetail style={{ paddingTop: '10px' }}>{item.name}</LabelDetail>
      </Segment>
    </Grid.Column>
  );
}

function renderSection(section: ITechSection, idx: number) {
  return (
    <Container text key={idx}>
      <HeaderSubHeader>
        {section.title}
      </HeaderSubHeader>
      <Divider fitted inverted />
      <Container
        text
        style={{ color: '#888', fontSize: '15px', paddingTop: '5px' }}
      >
        {section.text}
      </Container>
      <Grid padded columns='6' doubling>
        <Grid.Row>
          {section.items.map(renderItem)}
        </Grid.Row>
      </Grid>
    </Container>
  );
}

function TechSkillsSection(){
  return (
    <Segment inverted padded>
      <Header>
        <Icon name="code" color="green" />
        Tech Skills
      </Header>
      <Divider />
      <Container text>
        During my past projects and consultancy positions,
        I mastered the following technologies to varying but all professionally competent degrees.
      </Container>
      <Divider hidden />
      {sections.map(renderSection)}
    </Segment>
  );
}

export default TechSkillsSection;
