import React from 'react';
import { render } from '@testing-library/react';
import ContactSection from './ContactSection';

test('renders header', () => {
  const { findAllByText } = render(<ContactSection />);
  findAllByText(/Contact/i).then(res =>{
    expect(res).toHaveLength(2);
  });
});

test('contains email', () => {
  const { getByText } = render(<ContactSection />);
  const e = getByText(/heshammeneisi@gmail.com/i);
  expect(e).toBeInTheDocument();
});
