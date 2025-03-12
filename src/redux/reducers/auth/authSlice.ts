import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import type {RootState} from '../../store';
import {AuthState, UserTokenType} from '../../types';
import {clearStorage} from '@utils/storageUtils';

// Define the initial state using that type
const initialState: AuthState = {
  currentUser: null,
  userToken: null,
  welcomeEmail: '',
  registrationInfo: {
    FirstName: '',
    LastName: '',
    PersonBirthdate: '',
    BirthDate: '',
    Email: '',
    Phone: '',
    PhonePrefix: '',
    Password: '',
    PostalCode: '',
    Street: '',
    City: '',
    State: '',
  },
  status: 'idle',
  error: null,
  busy: false,
  signedIn: false,
};

// Thunk for logging out
export const logout = createAsyncThunk('auth/logout', async (_, {dispatch}) => {
  try {
    await clearStorage();
    dispatch(resetAuthState());
    console.log('Logout performed & storage cleared');
  } catch (err) {
    console.log('Error clearing app storage:', err);
  }
});

// Authorization slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addRegistrationInfo: (state: AuthState, action: PayloadAction<object>) => {
      state.registrationInfo = {
        ...state.registrationInfo,
        ...action.payload,
      };
    },
    setAuthError: (state: AuthState, {payload}: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = payload;
    },
    setToken: (state: AuthState, {payload}: PayloadAction<UserTokenType>) => {
      state.userToken = payload;
    },
    setAppBusy: (state: AuthState, action: PayloadAction<boolean>) => {
      state.busy = action.payload;
    },
    setPassword: (state: AuthState, {payload}: PayloadAction<string>) => {
      state.registrationInfo.Password = payload;
    },
    setSignedIn: (state: AuthState, {payload}: PayloadAction<boolean>) => {
      state.signedIn = payload;
    },
    setCurrentUser: (state: AuthState, {payload}: PayloadAction<object>) => {
      state.currentUser = payload;
    },
    setWelcomeEmail: (state: AuthState, {payload}: PayloadAction<string>) => {
      state.welcomeEmail = payload;
    },
    resetAuthState: (state: AuthState) => {
      state.registrationInfo = initialState.registrationInfo;
      state.status = initialState.status;
      // state.welcomeEmail = initialState.welcomeEmail;
      state.currentUser = initialState.currentUser;
      state.userToken = initialState.userToken;
      state.signedIn = initialState.signedIn;
      state.busy = initialState.busy;
      state.error = initialState.error;
      state.status = initialState.status;
    },
  },
});

export const {
  addRegistrationInfo,
  setAuthError,
  setToken,
  setAppBusy,
  setPassword,
  setSignedIn,
  setWelcomeEmail,
  resetAuthState,
} = authSlice.actions;

export const selectRegInfo = (state: RootState) => state.auth.registrationInfo;
export const selectWelcomeEmail = (state: RootState) => state.auth.welcomeEmail;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectAuthStatus = (state: RootState) => ({
  status: state.auth.status,
  error: state.auth.error,
});
export const selectIsSignedIn = (state: RootState) => state.auth.signedIn;

export default authSlice.reducer;
