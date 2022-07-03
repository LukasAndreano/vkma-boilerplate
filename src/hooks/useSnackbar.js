import { useRecoilState } from "recoil";
import main from "/src/storage/reducers/main";

export default function useSnackbar() {
  const [, setSnackbar] = useRecoilState(main);

  return (text) => setSnackbar(text);
}
