import { atom } from "recoil";

interface mainI {
  isDesktop: boolean;
  platform: string;
}

const _ = atom<mainI>({
  key: "mainStorage",
  default: {
    isDesktop: false,
    platform: "",
  },
});

export default _;
