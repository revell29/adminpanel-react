import * as types from './types';
const userStore = {
  user: {},
  isAuthenticated: null,
};

export const authReducer = (state = userStore, action) => {
  switch (action.type) {
    case types.LOGIN:
      if (!localStorage.getItem('token')) {
        localStorage.setItem('token', action.data.token);
      }
      return {
        ...state,
        isAuthenticated: true,
        user: action.data,
      };

    default:
      return state;
  }
};
