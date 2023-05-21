import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { useRouterBack } from "@kokateam/router-vkminiapps";

import { Group, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { getIsDesktop } from "/src/storage/selectors/main";

const Page = ({
  children,
  id,
  className = "",
  centered = false,
  isBack = false,
  name = "",
}) => {
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
