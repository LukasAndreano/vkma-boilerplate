import React, { Suspense, lazy } from "react";
import { withRouter } from "@reyzitwo/react-router-vkminiapps";
import {
  Epic,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
} from "@vkontakte/vkui";

import useRouterHooks from "/src/hooks/useRouterHooks";
import PageConstructor from "/src/components/__global/PageConstructor";
import Home from "./components/home/base";
import Profile from "./components/profile/base";
import MobileNavigation from "./components/__navigation/Mobile";
import DesktopNavigation from "./components/__navigation/Desktop";

const MainStack = lazy(() => import("./components/__modals/MainStack"));

const Navigation = ({ router, isDesktop }) => {
  const routerHooks = useRouterHooks({ router });

  return (
    <SplitLayout
      header={<PanelHeader separator={false} />}
      className={"jcc"}
      modal={
        <Suspense fallback={""}>
          <MainStack modal={router.modal} toBack={routerHooks.toBack} />
        </Suspense>
      }
      popout={router.popout}
    >
      {isDesktop ? (
        <DesktopNavigation
          activeView={router.activeView}
          openPage={routerHooks.openPage}
        />
      ) : null}

      <SplitCol
        animate={!isDesktop}
        spaced={isDesktop}
        width={isDesktop ? "650px" : "100%"}
        maxWidth={isDesktop ? "650px" : "100%"}
      >
        <Epic
          activeStory={router.activeView}
          tabbar={
            !isDesktop ? (
              <MobileNavigation
                activeView={router.activeView}
                openPage={routerHooks.openPage}
              />
            ) : null
          }
        >
          <View id="home" activePanel={router.activePanel}>
            <PageConstructor id={"home"} name={"Главная"}>
              <Home toModal={routerHooks.toModal} />
            </PageConstructor>
          </View>
          <View id="profile" activePanel={router.activePanel}>
            <PageConstructor id={"profile"} name={"Профиль"}>
              <Profile />
            </PageConstructor>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};

export default withRouter(Navigation);