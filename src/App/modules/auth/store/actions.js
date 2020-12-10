import * as types from "./types";

export const actionLogin = (data) => {
  return { type: types.LOGIN, data };
};
