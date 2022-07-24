import { configureStore } from "@reduxjs/toolkit";
import { coinDataSlice } from "./coinDataSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      coin: coinDataSlice.reducer,
    },
    devTools: true,
  });

export const storeWrapper = createWrapper(makeStore);
