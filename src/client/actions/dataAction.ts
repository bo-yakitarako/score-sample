import { createAsyncThunk } from '@reduxjs/toolkit';
import { Data } from '../modules/app';
import { get } from '../modules/http';

const dataAction = createAsyncThunk('dataAction', async () => {
  const data = await get<Data[]>('/api/data');
  return data;
});

type Form = {
  formName: string;
  formScore: string;
};

const post = createAsyncThunk<Data[], Form>('postAction', async (form) => {
  const { formName, formScore } = form;
  const requestUrl = `/api/post/data?userNameText=${formName}&scoreText=${formScore}`;
  await get<{ isOk: boolean }>(requestUrl);
  const data = await get<Data[]>('/api/data');
  return data;
});

export { dataAction, post };
