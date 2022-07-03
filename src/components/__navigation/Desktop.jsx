import React from "react";
import { Panel, PanelHeader, SimpleCell, SplitCol } from "@vkontakte/vkui";
import navigationItems from "/src/components/__navigation/items";

const DesktopNavigation = ({ activeView, openPage }) => {
  return (
    <SplitCol fixed width="240px" maxWidth="240px">
      <Panel nav="navigationDesktop">
        <PanelHeader>Boilerplate</PanelHeader>

        {navigationItems.map((el, key) => (
          <SimpleCell
            key={key}
            className={`mb5 ${
              activeView === el.id ? "navigation__item-selected" : ""
            }`}
            onClick={() => openPage(el.id, el.id)}
            disabled={activeView === el.id}
            before={el.icon}
            multiline
            description={el.description}
          >
            {el.title}
          </SimpleCell>
        ))}
      </Panel>
    </SplitCol>
  );
};

export default DesktopNavigation;
