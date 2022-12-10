import { useRecoilState } from "recoil";
import main from "/src/storage/atoms/main";

export default function useSnackbar() {
  const [, setSnackbar] = useRecoilState(main);

  return (text) => setSnackbar(text);
}
