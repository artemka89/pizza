import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders headline', () => {
    render(<App />);

    screen.debug();

    // check if App components renders headline
  });
});
