import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: {},
};

const LOAD_GREETING = 'LOAD_GREETING';
const API_URL = 'http://localhost:3000/greetings';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOAD_GREETING}/fulfilled`:
      return { ...state, greeting: action.payload };
    default: return state;
  }
};

export const fetchGreeting = createAsyncThunk(LOAD_GREETING, async () => {
  const Response = await fetch(API_URL);
  const result = await Response.json();
  return result;
});

// export const loadDetails = (id) => ({ type: LOAD_DETAILS, id });

export default greetingReducer;
