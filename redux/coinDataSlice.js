import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  coinData: [],
};

export const coinDataSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    fetchCoinData: (state, action) => {
      state.coinData = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.coin,
      };
    },
  },
});

export const { fetchCoinData } = coinDataSlice.actions;

export const selectCoinData = (state) => state.coin.coinData;

export default coinDataSlice.reducer;
