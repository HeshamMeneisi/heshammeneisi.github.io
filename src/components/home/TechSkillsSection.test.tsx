import React from 'react';
import { render } from '@testing-library/react';
import TechSkillsSection from './TechSkillsSection';

test('renders header', () => {
  const { getByText } = render(<TechSkillsSection />);
  const h = getByText(/Tech Skills/i);
  expect(h).toBeInTheDocument();
});

test('renders datascience subsection', () => {
  const { getByText } = render(<TechSkillsSection />);
  const t = getByText(/Machine Learning/i);
  expect(t).toBeInTheDocument();
});

test('renders devops subsection', () => {
  const { getByText } = render(<TechSkillsSection />);
  const t = getByText(/CI\/CD stages/i);
  expect(t).toBeInTheDocument();
});

test('renders backend subsection', () => {
  const { getByText } = render(<TechSkillsSection />);
  const t = getByText(/APIs/i);
  expect(t).toBeInTheDocument();
});

test('renders frontend subsection', () => {
  const { getByText } = render(<TechSkillsSection />);
  const t = getByText(/UI and UX/i);
  expect(t).toBeInTheDocument();
});

test('renders other subsection', () => {
  const { getByText } = render(<TechSkillsSection />);
  const t = getByText(/Other/i);
  expect(t).toBeInTheDocument();
});
