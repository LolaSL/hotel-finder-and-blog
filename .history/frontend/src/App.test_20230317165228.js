import { render, screen } from '@testing-library/react';
import App from './App.jsx';
import React from 'react';
import { shallow } from 'enzyme';
test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
