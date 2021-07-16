/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const app = createSlice({
  name: 'template',
  initialState,
  reducers: {
    change: (state, { payload }: PayloadAction<number>) => {
      state.count += payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export { app };
