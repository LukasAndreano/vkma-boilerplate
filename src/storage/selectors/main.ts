import { selector } from "recoil";
import _ from "src/storage/atoms/main";

export const getIsDesktop = selector({
  key: "getIsDesktop",
  get: ({ get }) => get(_).isDesktop,
});

export const getPlatform = selector({
  key: "getPlatform",
  get: ({ get }) => get(_).platform,
});
