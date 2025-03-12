import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './reducers/auth/authSlice';
import userSlice from './reducers/user/userSlice';

const reducers = combineReducers({
  auth: authSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
