import { ReactNode } from "react";

import { useRecoilValue } from "recoil";
import { Toaster } from "react-hot-toast";

import { getIsDesktop } from "src/storage/selectors/main";

interface SnackbarProviderI {
  children: ReactNode;
}

export default function SnackbarProvider({ children }: SnackbarProviderI) {
  const isDesktop = useRecoilValue(getIsDesktop);

  return (
    <>
      {children}

      <Toaster
        toastOptions={{
          className: "toast",
        }}
        gutter={isDesktop ? 8 : -20}
        position={isDesktop ? "bottom-left" : "top-center"}
        reverseOrder={false}
      />
    </>
  );
}
