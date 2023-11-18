import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SW_URL } from '../constants/api';
import { SWPeople } from '../interface/commons';

type personState = {
  loading: boolean;
  personData: SWPeople | null;
  error: string | null;
};

export const fetchSwPerson = createAsyncThunk<SWPeople, number | null, { rejectValue: string }>(
  'person/fetchSwPerson',
  async function (id, { rejectWithValue }) {
    if (id) {
      const response = await fetch(`${SW_URL}/people/${id}`);
      if (!response.ok) {
        return rejectWithValue('Server error');
      }
      const data = await response.json();
      return data;
    }
  },
);

const initialState: personState = {
  loading: false,
  personData: null,
  error: null,
};

const personSlice = createSlice({
  name: 'people',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSwPerson.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSwPerson.fulfilled, (state, action) => {
        state.loading = false;
        state.personData = action.payload;
      })
      .addCase(fetchSwPerson.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

export default personSlice.reducer;
