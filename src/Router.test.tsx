import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('#Test App', () => {
  test('Error Page', () => {
    render(
      <MemoryRouter initialEntries={['/error']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
