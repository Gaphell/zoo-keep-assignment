import { combineReducers, configureStore, Store } from '@reduxjs/toolkit'
import { TASK_FEATURE_KEY, taskReducer } from "./task/task.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';
import { Persistor } from "redux-persist/es/types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Reducer } from "react";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [TASK_FEATURE_KEY]
};

const reducers = combineReducers({
  [TASK_FEATURE_KEY]: taskReducer
});

const persistedReducer: Reducer<any, any> = persistReducer(persistConfig, reducers);

export const store: Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export const persistor: Persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
