import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('#Test App', () => {
  test('Error Page', () => {
    render(
      <MemoryRouter initialEntries={['/error']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });

  test('Planets Page', () => {
    render(
      <MemoryRouter initialEntries={['/planets']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('planets-page')).toBeInTheDocument();
  });

  test('StarShips Page', () => {
    render(
      <MemoryRouter initialEntries={['/starships']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('starShips-page')).toBeInTheDocument();
  });

  test('StarShips Page', () => {
    render(
      <MemoryRouter initialEntries={['/films']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('films-page')).toBeInTheDocument();
  });
});
