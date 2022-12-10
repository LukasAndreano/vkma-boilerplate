import { atom } from "recoil";

const _ = atom({
  key: "mainStorage",
  default: {
    isDesktop: false,
    platform: "",
    snackbar: "",
  },
});

export default _;
