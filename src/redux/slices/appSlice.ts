import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  isLoading: false,
  showAlert: {
    isShow: false,
    message: "",
    status: "success",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setShowAlert: (state, action: PayloadAction<ShowAlertPayload>) => {
      state.showAlert = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
export const { setIsLoading, setShowAlert } = appSlice.actions;

type InitialState = {
  isLoading: boolean;
  showAlert: ShowAlertPayload;
};

type ShowAlertPayload = {
  isShow: boolean;
  status: "success" | "error";
  message: string;
};
