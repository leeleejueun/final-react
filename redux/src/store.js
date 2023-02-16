import { configureStore } from '@reduxjs/toolkit';
import testSlice from './createSlice';

export const store = configureStore({
    reducer : { counter : testSlice } // {내가 지어준 이름 : import로 받아온값}
})