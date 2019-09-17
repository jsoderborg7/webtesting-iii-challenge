// Test away!

import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Display from './Display';

test('display renders', () =>{
  render(<Display />);
});

test('should match snapshot', () =>{
  expect(render(<Display />)).toMatchSnapshot();
});

test('should display if gate is closed and locked', () =>{
  const component = render(<Display closed={true} locked={true} />);
  component.getByText(/closed/i);
  component.getByText(/locked/i);
});

test('should display if gate is open and unlocked', () =>{
  const component = render(<Display closed={false} locked={false} />);
  component.getByText(/open/i);
  component.getByText(/unlocked/i);
});