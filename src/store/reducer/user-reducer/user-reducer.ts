import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../const.ts';
import {UserState} from 'types/state.ts';
import {checkAuthAction, loginAction, logoutAction} from 'store/api-action.ts';
import {AuthStatusEnum} from 'types/auth-status.enum.ts';
import {dropToken, saveToken} from 'services/token.ts';

const initialState: UserState = {
  user: null,
  authStatus: AuthStatusEnum.Unknown,
};

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = AuthStatusEnum.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.user = null;
        state.authStatus = AuthStatusEnum.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authStatus = AuthStatusEnum.Auth;
        saveToken(action.payload.token);
      })
      .addCase(loginAction.rejected, (state) => {
        state.user = null;
        state.authStatus = AuthStatusEnum.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.user = null;
        state.authStatus = AuthStatusEnum.NoAuth;
        dropToken();
      })
      .addCase(logoutAction.rejected, (state) => {
        state.user = null;
        state.authStatus = AuthStatusEnum.NoAuth;
      });
  },
});
