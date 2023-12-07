import { getPagesArray, getIdPerson } from './utils';
import { describe, test, expect } from 'vitest';

describe('#getPagesArray', () => {
  test('return an empty array', () => {
    expect(getPagesArray(-5)).toStrictEqual([]);
  });
  test('return an empty array', () => {
    expect(getPagesArray(0)).toStrictEqual([]);
  });
  test('return an array with one value starting from 1', () => {
    expect(getPagesArray(1)).toStrictEqual([1]);
  });
  test('return an array with five values starting from 1 to 5', () => {
    expect(getPagesArray(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });
  test('return an array with ten values from 1 to 10', () => {
    expect(getPagesArray(10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe('#getIdPerson', () => {
  test('return 1', () => {
    expect(getIdPerson('http https://swapi.dev/api/people/1/')).toBe(1);
  });
  test('return 233', () => {
    expect(getIdPerson('http https://swapi.dev/api/people/233/')).toBe(233);
  });
  test('return 1', () => {
    expect(getIdPerson('http https://swapi.dev/api/people/')).toBe(1);
  });
  test('return 1', () => {
    expect(getIdPerson('http https://swapi.dev/api/people/-255/')).toBe(1);
  });
});
