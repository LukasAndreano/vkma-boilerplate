import { useRouterView } from "@kokateam/router-vkminiapps";

import { Panel, PanelHeader, SimpleCell, SplitCol } from "@vkontakte/vkui";
import navigationItems from "./items";

const DesktopNavigation = () => {
  const { view, toView } = useRouterView();

  return (
    <SplitCol fixed width="240px" maxWidth="240px">
      <Panel nav="navigationDesktop">
        <PanelHeader>Boilerplate</PanelHeader>

        {navigationItems.map((el, key) => (
          <SimpleCell
            key={key}
            className={`mb5 ${
              view === el.id ? "navigation__item-selected" : ""
            }`}
            onClick={() => toView(el.id)}
            disabled={view === el.id}
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
