import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders floating buttons', () => {
  const { getByText } = render(<App />);
  const g = getByText(/Github/i);
  const u = getByText(/Upwork/i);
  expect(g).toBeInTheDocument();
  expect(u).toBeInTheDocument();
});
