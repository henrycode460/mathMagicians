import {render, screen} from '@testing-library/react';

import Calculator from './Calculator.js'
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

test('render calcolutor buttons', () => {
    render ( <Calculator/> );
    const calculateButton = screen.getAllByRole('button');
    expect(calculateButton).toHaveLength(19);

})


describe('Testing the Home', () => {
    it('Calculator is rendered', () => {
      const calculator = renderer
        .create(<BrowserRouter><Calculator /></BrowserRouter>)
        .toJSON();
      expect(calculator).toMatchSnapshot();
    });
  });