import { PanelHeader, SplitCol, SplitLayout } from "@vkontakte/vkui";
import { Epic, View, useRouterPopout } from "@kokateam/router-vkminiapps";
import PageConstructor from "/src/components/__global/PageConstructor";
import Home from "./components/home/base";
import Profile from "./components/profile/base";
import MainStack from "./components/__modals/MainStack";
import DesktopNavigation from "./components/__navigation/Desktop";
import MobileNavigation from "./components/__navigation/Mobile";

const Navigation = ({ isDesktop }) => {
  const [popout] = useRouterPopout();

  return (
    <SplitLayout
      header={<PanelHeader separator={false} />}
      className={"jcc"}
      modal={<MainStack />}
      popout={popout}
    >
      {isDesktop ? <DesktopNavigation /> : null}

      <SplitCol
        animate={!isDesktop}
        spaced={isDesktop}
        width={isDesktop ? "650px" : "100%"}
        maxWidth={isDesktop ? "650px" : "100%"}
      >
        <Epic tabbar={!isDesktop ? <MobileNavigation /> : null}>
          <View id="home">
            <PageConstructor id={"home"} name={"Главная"}>
              <Home />
            </PageConstructor>

            <PageConstructor id={"home2"} name={"Главная 2"}>
              <Home />
            </PageConstructor>
          </View>

          <View id="profile">
            <PageConstructor id={"profile"} name={"Профиль"}>
              <Profile />
            </PageConstructor>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};

export default Navigation;
