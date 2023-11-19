import { vi } from 'vitest';
import { DataState } from '../interface/redux';
import peopleReducer, { fetchSwPeople, findPeople } from './peopleSlice';
import { SWData } from '../interface/commons';

const initState: DataState = {
  searchValue: '',
  loading: false,
  response: {},
  error: null,
};

describe('peopleSlice', () => {
  test('should return default state when passed an empty action', () => {
    const result = peopleReducer(undefined, { type: '' });

    expect(result).toEqual(initState);
  });

  test('should change "searchValue" to a new value', () => {
    const action = { type: findPeople.type, payload: 'Test' };

    const result = peopleReducer(initState, action);

    expect(result.searchValue).toBe('Test');
  });

  test('should change loading and error-message with "fetchSwPeople.pending" action', () => {
    const state = peopleReducer(initState, fetchSwPeople.pending('', ''));

    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  test('should change response and loading with "fetchSwPeople.fulfilled" action', () => {
    const peopleData: SWData = {
      count: 1,
      next: 'string',
      previous: 'string',
      results: [],
    };

    const state = peopleReducer(initState, fetchSwPeople.fulfilled(peopleData, '', ''));

    expect(state).toEqual({
      searchValue: '',
      loading: false,
      response: peopleData,
      error: null,
    });
  });

  test('should change error-message with "fetchSwPeople.rejected"', () => {
    const state = peopleReducer(
      initState,
      fetchSwPeople.rejected(new Error('Server error'), '', ''),
    );

    expect(state).toEqual({
      searchValue: '',
      loading: false,
      response: {},
      error: 'Server error',
    });
  });
});

describe('SwData', () => {
  test('should SwPeopleThank with resolved response', async () => {
    const dispatch = vi.fn();
    const thunk = fetchSwPeople('');

    await thunk(dispatch, () => ({}), 'anyAction');

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe('people/fetchSwPeople/pending');
  });
});
