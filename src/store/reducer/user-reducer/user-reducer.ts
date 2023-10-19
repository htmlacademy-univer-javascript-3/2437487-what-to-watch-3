import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../const.ts';
import {UserState} from 'types/state.ts';
import {checkAuthAction, loginAction, logoutAction} from 'store/api-action.ts';
import {AuthStatus} from 'types/auth-status.ts';
import {dropToken, saveToken} from 'services/token.ts';

const initialState: UserState = {
  user: null,
  authStatus: AuthStatus.Unknown,
};

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.user = null;
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = AuthStatus.Auth;
        saveToken(action.payload.token);
      })
      .addCase(loginAction.rejected, (state) => {
        state.user = null;
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.authStatus = AuthStatus.NoAuth;
        dropToken();
      })
      .addCase(logoutAction.rejected, (state) => {
        state.user = null;
        state.authStatus = AuthStatus.NoAuth;
      });
  },
});
