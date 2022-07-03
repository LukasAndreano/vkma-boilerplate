import React from "react";
import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import navigationItems from "/src/components/__navigation/items";

const MobileNavigation = ({ activeView, openPage }) => {
  return (
    <Tabbar>
      {navigationItems.map((el, key) => (
        <TabbarItem
          onClick={() => openPage(el.id, el.id)}
          key={key}
          selected={activeView === el.id}
          text={el.title}
        >
          {el.icon}
        </TabbarItem>
      ))}
    </Tabbar>
  );
};

export default MobileNavigation;
