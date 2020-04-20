import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

test('renders about section', () => {
  const { getByText } = render(<HomePage />);
  const s = getByText(/About Me/i);
  expect(s).toBeInTheDocument();
});

test('renders tech skills section', () => {
  const { getByText } = render(<HomePage />);
  const s = getByText(/Tech Skills/i);
  expect(s).toBeInTheDocument();
});
