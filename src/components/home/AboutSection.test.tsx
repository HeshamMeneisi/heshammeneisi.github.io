import React from 'react';
import { render } from '@testing-library/react';
import AboutSection from './AboutSection';

test('renders header', () => {
  const { getByText } = render(<AboutSection />);
  const h = getByText(/About Me/i);
  expect(h).toBeInTheDocument();
});

test('renders body', () => {
  const { getByText } = render(<AboutSection />);
  const s1 = getByText(/full-stack/i);
  const s2 = getByText(/Hesham Meneisi/i);
  expect(s1).toBeInTheDocument();
  expect(s2).toBeInTheDocument();
});
