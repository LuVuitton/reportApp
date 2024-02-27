import { configureStore } from "@reduxjs/toolkit";
import { reportApi } from "../api/report.api";
import { generalRequestHandlerMiddleware } from "../middlewares/generalRequestHandlerMiddleware";
import { countriesApi } from "../api/countries.api";
import { appReducer } from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    [reportApi.reducerPath]: reportApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    app: appReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(reportApi.middleware)
      .concat(countriesApi.middleware)
      .concat(generalRequestHandlerMiddleware),
});

