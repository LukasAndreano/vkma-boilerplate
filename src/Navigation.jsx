import { PanelHeader, SplitCol, SplitLayout } from "@vkontakte/vkui";
import { Epic, View, useRouterPopout } from "@kokateam/router-vkminiapps";
import PageConstructor from "/src/components/__global/PageConstructor";
import Home from "./panels/home/home";
import MainStack from "./modals/MainStack";
import DesktopNavigation from "./components/__navigation/Desktop";
import MobileNavigation from "./components/__navigation/Mobile";
import Profile from "./panels/profile/profile";

const Navigation = ({ isDesktop }) => {
  const [popout] = useRouterPopout();

  return (
    <SplitLayout header={<PanelHeader />} modal={<MainStack />} popout={popout}>
      {isDesktop ? <DesktopNavigation /> : null}

      <SplitCol autoSpaced>
        <Epic tabbar={!isDesktop ? <MobileNavigation /> : null}>
          <View id="home">
            <PageConstructor id={"home"} name={"Главная"}>
              <Home />
            </PageConstructor>

            <PageConstructor isBack id={"home2"} name={"Главная 2"}>
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
