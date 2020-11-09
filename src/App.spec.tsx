import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hidden title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Kaossilator/i);
  expect(linkElement).toBeInTheDocument();
});
