import { useCallback } from "react";

export default function useRouterHooks({ router }) {
  const toPanel = useCallback(
    (panel) => {
      router.toPanel(panel);
    },
    [router]
  );

  const toView = useCallback(
    (view) => {
      router.toView(view);
    },
    [router]
  );

  const openPage = useCallback(
    (view, panel) => {
      toView(view);
      toPanel(panel);
    },
    [toPanel, toView]
  );

  const toBack = () => router.toBack();
  const toPopout = (popout) => router.toPopout(popout);
  const toModal = (modal) => router.toModal(modal);

  return {
    toPanel,
    toView,
    toPopout,
    openPage,
    toBack,
    toModal,
  };
}
