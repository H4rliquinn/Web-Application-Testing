import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

test('Shows the display areas', () => {
  const pageRender = render(<App />);

  // pageRender.getByText(/strikes/i);
  // pageRender.getByText(/balls/i);

});
