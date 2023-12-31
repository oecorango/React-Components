import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SW_URL } from '../constants/api';
import { SWData } from '../interface/commons';
import { SEARCH_STORAGE } from '../constants/common';
import { DataState } from '../interface/redux';

export const fetchSwPeople = createAsyncThunk<SWData, string, { rejectValue: string }>(
  'people/fetchSwPeople',
  async function (searchValue, { rejectWithValue }) {
    const response = await fetch(`${SW_URL}/people${searchValue}`);
    if (!response.ok) {
      return rejectWithValue('Server error');
    }
    const data: SWData = await response.json();
    return data;
  },
);

const initSearchValue = () => {
  const value = localStorage.getItem(SEARCH_STORAGE);
  if (value) {
    return value;
  }
  return '';
};

const initialState: DataState = {
  searchValue: initSearchValue(),
  loading: false,
  response: {},
  error: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,

  reducers: {
    findPeople(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSwPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSwPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(fetchSwPeople.rejected, (state, action) => {
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

export const { findPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
