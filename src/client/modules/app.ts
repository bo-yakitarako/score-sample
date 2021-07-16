/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataAction, post } from '../actions/dataAction';

type Data = {
  dataId: number;
  userName: string;
  score: number;
  createdAt: string;
};

const initialState = {
  count: 0,
  datas: [] as Data[],
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
  extraReducers: (builder) => {
    builder.addCase(dataAction.fulfilled, (state, { payload }) => {
      return {
        ...state,
        datas: payload,
      };
    });
    builder.addCase(post.fulfilled, (state, { payload }) => {
      return {
        ...state,
        datas: payload,
      };
    });
  },
});

export { app, Data };
