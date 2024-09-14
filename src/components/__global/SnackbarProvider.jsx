import { useRecoilValue } from "recoil";
import { Toaster } from "react-hot-toast";
import { getIsDesktop } from "../../storage/selectors/main";

export default function SnackbarProvider({ children }) {
  const isDesktop = useRecoilValue(getIsDesktop);

  return (
    <>
      {children}

      <Toaster
        toastOptions={{
          className: "toast",
        }}
        gutter={8}
        position={isDesktop ? "bottom-left" : "bottom-center"}
        reverseOrder={false}
      />
    </>
  );
}
