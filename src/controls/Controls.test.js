// Test away!

import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Controls from './Controls';

test('buttons for locked and closed rendering', () =>{
  const component = render(<Controls />);
  component.getByText(/lock gate/i);
  component.getByText(/close gate/i);
});

test('right side button disabled when locked=true', () =>{
  const component = render(<Controls locked={true} closed={true} />);
  let openGate = component.queryByText(/open gate/i);
  expect(openGate).toHaveAttribute("disabled");
});

test('left side button disabled when closed=false', () =>{
  const component = render(<Controls closed={false} locked={false} />);
  let lockGate = component.queryByText(/lock gate/i);
  expect(lockGate).toHaveAttribute("disabled");
});