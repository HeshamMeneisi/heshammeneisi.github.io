import React from 'react';
import { render } from '@testing-library/react';
import ContactSection from './ContactSection';

test('renders header', () => {
  const { findAllByText } = render(<ContactSection />);
  findAllByText(/Reviews/i).then(res =>{
    expect(res).toHaveLength(2);
  });
});
