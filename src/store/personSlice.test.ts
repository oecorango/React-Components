import { SWPeople } from '../interface/commons';
import { personState } from '../interface/redux';
import personReducer, { fetchSwPerson } from './personSlice';

const initState: personState = {
  loading: false,
  personData: null,
  error: null,
};

describe('peopleSlice', () => {
  test('should change loading and error-message with "fetchSwPeople.pending" action', () => {
    const state = personReducer(initState, fetchSwPerson.pending('', 1));

    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  test('should change response and loading with "fetchSwPeople.fulfilled" action', () => {
    const peopleData: SWPeople = {
      name: 'string',
      height: 1,
      mass: 1,
      hair_color: 'string',
      skin_color: 'string',
      eye_color: 'string',
      birth_year: 'string',
      gender: 'string',
      homeworld: 'string',
      films: ['string'],
      species: ['string'],
      vehicles: ['string'],
      starships: ['string'],
      created: 'string',
      edited: 'string',
      url: 'string',
    };

    const state = personReducer(initState, fetchSwPerson.fulfilled(peopleData, '', 1));

    expect(state).toEqual({
      loading: false,
      personData: peopleData,
      error: null,
    });
  });

  test('should change error-message with "fetchSwPeople.rejected"', () => {
    const state = personReducer(
      initState,
      fetchSwPerson.rejected(new Error('Server error'), '', 1),
    );

    expect(state).toEqual({
      loading: false,
      personData: null,
      error: 'Server error',
    });
  });
});
