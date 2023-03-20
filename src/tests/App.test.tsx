import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the logo and two download buttons', () => {
  const { getByAltText, getByText } = render(<App />);
  const logoElement = getByAltText('Logo');
  const button1Element = getByText('Curriculum-ES');
  const button2Element = getByText('Curriculum-EN');
  expect(logoElement).toBeInTheDocument();
  expect(button1Element).toBeInTheDocument();
  expect(button2Element).toBeInTheDocument();
});
