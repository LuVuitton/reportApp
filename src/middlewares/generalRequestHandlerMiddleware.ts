import {
  isRejectedWithValue,
  isPending,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { setIsLoading, setShowAlert } from "../redux/slices/appSlice";

export const generalRequestHandlerMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      api.dispatch(
        setShowAlert({
          isShow: true,
          message: "somthing went wrong",
          status: "error",
        })
      );
    }
    if (isPending(action)) {
      api.dispatch(setIsLoading(true));
    }
    if (
      isFulfilled(action) ||
      isRejected(action) ||
      isRejectedWithValue(action)
    ) {
      api.dispatch(setIsLoading(false));
    }

    return next(action);
  };
