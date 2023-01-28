import { atom } from "recoil";

const _ = atom({
  key: "mainStorage",
  default: {
    isDesktop: false,
    platform: "",
  },
});

export default _;
