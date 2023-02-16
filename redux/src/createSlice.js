import { createSlice } from "@reduxjs/toolkit";

const initialState = {count:0};

const testSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        // 어떠한 일들을 처리할것인가?
        increment(state,action){ state.count += action.payload },
        decrement(state,action){ state.count -= action.payload }
    }
});

export const { increment, decrement } = testSlice.actions;
export default testSlice.reducer;