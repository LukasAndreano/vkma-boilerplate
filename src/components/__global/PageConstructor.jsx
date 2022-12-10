import React, { Suspense } from "react";
import { Group, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { getIsDesktop } from "/src/storage/selectors/main";
import { useRecoilValue } from "recoil";

const Page = ({
  children,
  id,
  className = "",
  centered = false,
  toBack = false,
  disableSpace = false,
  name = "",
}) => {
  const isDesktop = useRecoilValue(getIsDesktop);

  return (
    <Panel
      id={id}
      centered={centered}
      className={`${!isDesktop ? "DivFix" : undefined} ${className}`}
    >
      <PanelHeader
        before={
          toBack ? <PanelHeaderBack onClick={() => toBack()} /> : undefined
        }
        separator={isDesktop}
      >
        {name}
      </PanelHeader>
      <Group className={disableSpace ? "" : "p5"}>
        <Suspense fallback={""}>{children}</Suspense>
      </Group>
    </Panel>
  );
};

export default Page;
