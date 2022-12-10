import { selector } from "recoil";
import _ from "/src/storage/reducers/main";

export const getIsDesktop = selector({
  key: "getIsDesktop",
  get: ({ get }) => get(_).isDesktop,
});

export const getSnackbar = selector({
  key: "getSnackbar",
  get: ({ get }) => get(_).snackbar,
  set: ({ set }, value) => set(_, (state) => ({ ...state, snackbar: value })), // setter example
});

export const getPlatform = selector({
  key: "getPlatform",
  get: ({ get }) => get(_).platform,
});
