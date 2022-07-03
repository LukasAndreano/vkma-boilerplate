import { selector } from "recoil";
import _ from "/src/storage/reducers/main";

export const getIsDesktop = selector({
  key: "getIsDesktop",
  get: ({ get }) => get(_).isDesktop,
});

export const getSnackbar = selector({
  key: "getSnackbar",
  get: ({ get }) => get(_).snackbar,
});

export const getPlatform = selector({
  key: "getPlatform",
  get: ({ get }) => get(_).platform,
});
