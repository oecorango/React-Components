import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Catalog link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const logo = screen.getByText('SW People');
  expect(logo).toBeInTheDocument();
});
