import { useRouterView } from "@kokateam/router-vkminiapps";
import {
  Card,
  Panel,
  PanelHeader,
  SimpleCell,
  SplitCol,
} from "@vkontakte/vkui";
import navigationItems from "/src/components/__navigation/items";

const DesktopNavigation = () => {
  const [view, toView] = useRouterView();

  return (
    <SplitCol fixed width="280px" maxWidth="280px">
      <Panel nav="navigationDesktop">
        <PanelHeader>Boilerplate</PanelHeader>

        <Card mode={"outline"} className={"header p5"}>
          {navigationItems.map((el, key) => (
            <SimpleCell
              key={key}
              className={`mb5 ${
                view === el.id ? "navigation__item-selected" : ""
              }`}
              onClick={() => {
                if (view !== el.id) toView(el.id);
              }}
              hasActive={view !== el.id}
              hasHover={view !== el.id}
              before={el.icon}
              multiline
              description={el.description}
            >
              {el.title}
            </SimpleCell>
          ))}
        </Card>
      </Panel>
    </SplitCol>
  );
};

export default DesktopNavigation;
