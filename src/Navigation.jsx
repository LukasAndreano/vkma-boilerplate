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

const DesktopNavigation = lazy(() =>
  import("./components/__navigation/Desktop")
);
const MobileNavigation = lazy(() => import("./components/__navigation/Mobile"));

const Home = lazy(() => import("/src/components/home/base"));
const Profile = lazy(() => import("/src/components/profile/base"));

const MainStack = lazy(() => import("./components/__modals/MainStack"));

const Navigation = ({ router, isDesktop }) => {
  const routerHooks = useRouterHooks({ router });

  return (
    <SplitLayout
      header={<PanelHeader separator={false} />}
      style={{ justifyContent: "center" }}
      modal={
        <Suspense fallback={""}>
          <MainStack modal={router.modal} toBack={routerHooks.toBack} />
        </Suspense>
      }
      popout={router.popout}
    >
      {isDesktop ? (
        <Suspense fallback={""}>
          <DesktopNavigation
            activeView={router.activeView}
            openPage={routerHooks.openPage}
          />
        </Suspense>
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
              <Suspense fallback={""}>
                <MobileNavigation
                  activeView={router.activeView}
                  openPage={routerHooks.openPage}
                />
              </Suspense>
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
