import React from "react";
import {withRouter} from "@reyzitwo/react-router-vkminiapps";
import {Epic, PanelHeader, SplitCol, SplitLayout} from "@vkontakte/vkui";

import useRouterHooks from "/src/hooks/useRouterHooks";
import PageConstructor from "/src/components/__global/PageConstructor";
import Home from "./components/home/base";
import Profile from "./components/profile/base";
import MobileNavigation from "./components/__navigation/Mobile";
import DesktopNavigation from "./components/__navigation/Desktop";
import CustomView from "./components/__global/CustomView";
import MainStack from "./components/__modals/MainStack";

const Navigation = ({router, isDesktop}) => {
    const routerHooks = useRouterHooks({router});

    return (
        <SplitLayout
            header={<PanelHeader separator={false}/>}
            className={"jcc"}
            modal={
                <MainStack modal={router.modal} toBack={routerHooks.toBack}/>
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
                    <CustomView id="home">
                        <PageConstructor id={"home"} name={"Главная"}>
                            <Home
                                toModal={routerHooks.toModal}
                                toPanel={routerHooks.toPanel}
                            />
                        </PageConstructor>

                        <PageConstructor id={"home2"} name={"Главная 2"}>
                            <Home toModal={routerHooks.toModal}/>
                        </PageConstructor>
                    </CustomView>
                    <CustomView id="profile">
                        <PageConstructor id={"profile"} name={"Профиль"}>
                            <Profile/>
                        </PageConstructor>
                    </CustomView>
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
};

export default withRouter(Navigation);
