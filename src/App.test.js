import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Braydon Lafleur name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Braydon Lafleur/i);
  expect(nameElement).toBeInTheDocument();
});
