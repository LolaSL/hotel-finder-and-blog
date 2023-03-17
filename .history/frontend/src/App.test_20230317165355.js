// import { render, screen } from '@testing-library/react';
import App from './App.jsx';
import React from 'react';
import { shallow } from 'enzyme';

// test('renders App', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
  it('should display a header with the text "My App"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('My App');
  });
  // });