import { getSnackbar } from "../../storage/selectors/main";
import React from "react";
import { Snackbar } from "@vkontakte/vkui";
import { useRecoilState } from "recoil";

export default function SnackbarProvider({ children }) {
  const [snackbar, setSnackbar] = useRecoilState(getSnackbar);

  return (
    <>
      {children}
      {snackbar !== "" && (
        <Snackbar onClose={() => setSnackbar("")} duration={3000}>
          {snackbar}
        </Snackbar>
      )}
    </>
  );
}
