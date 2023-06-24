import { ReactNode, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { useRouterBack } from "@kokateam/router-vkminiapps";

import { Group, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { getIsDesktop } from "src/storage/selectors/main";

interface PageI {
  id: string;
  centered?: boolean;
  isBack?: boolean;
  name?: string;
  className?: string;
  children: ReactNode;
}

const Page = ({
  id,
  centered = false,
  isBack = false,
  name = "",
  className = "",
  children,
}: PageI) => {
  const isDesktop = useRecoilValue(getIsDesktop);
  const toBack = useRouterBack();

  return (
    <Panel
      id={id}
      centered={centered}
      className={`${!isDesktop ? "DivFix" : undefined} ${className}`}
    >
      <PanelHeader
        before={
          isBack ? <PanelHeaderBack onClick={() => toBack(-1)} /> : undefined
        }
        separator={isDesktop}
      >
        {name}
      </PanelHeader>
      <Group className={isDesktop ? "" : "p5"}>
        <Suspense fallback={""}>{children}</Suspense>
      </Group>
    </Panel>
  );
};

export default Page;
