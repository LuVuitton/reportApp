import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
