import { useRouterView } from "@kokateam/router-vkminiapps";

import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import navigationItems from "./items";

const MobileNavigation = () => {
  const { view, toView } = useRouterView();

  return (
    <Tabbar>
      {navigationItems.map((el, key) => (
        <TabbarItem
          onClick={() => toView(el.id)}
          key={key}
          selected={view === el.id}
          text={el.title}
        >
          {el.icon}
        </TabbarItem>
      ))}
    </Tabbar>
  );
};

export default MobileNavigation;
