import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Catalog link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const logo = screen.getByText('SW People');
  expect(logo).toBeInTheDocument();
});
