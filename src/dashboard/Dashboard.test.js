// Test away

import React from 'react';
import {render, fireEvent} from "@testing-library/react"

import Dashboard from './Dashboard';

test('control and display render', () =>{
  const component = render(<Dashboard />);
  component.getByText(/unlocked/i);
  component.getByText(/open/i);
  component.getByText(/Lock gate/i);
  component.getByText(/close/i);
});

test('text on buttons changes with click', () =>{
  const component = render(<Dashboard />);
  const button2 = component.getByText(/close gate/i);
  fireEvent.click(button2);
  component.getByText(/open gate/i); 
  const button1 = component.getByText(/lock gate/i);
  fireEvent.click(button1);
  component.getByText(/unlock gate/i);
});

test('gate does not open or close if locked',() =>{
  const component = render(<Dashboard />);
  const button2 = component.getByText(/close gate/i);
  fireEvent.click(button2);
  const button1 = component.getByText(/lock gate/i);
  fireEvent.click(button1);
  component.getByText(/closed/i);
  component.getByText(/locked/i);
  fireEvent.click(button2);
  component.getByText(/closed/i)
})

test('defaults to unlocked and open', () =>{
  const component = render(<Dashboard />);
  component.getByText(/open/i);
  component.getByText(/unlocked/i);
})