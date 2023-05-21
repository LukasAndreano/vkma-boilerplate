import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import {
  AppearanceProvider,
  AppRoot,
  ConfigProvider,
  usePlatform,
  withAdaptivity,
} from "@vkontakte/vkui";

import { SnackbarProvider } from "/src/components/__global";
import Navigation from "/src/Navigation";

import bridge from "@vkontakte/vk-bridge";
import main from "/src/storage/atoms/main";

const App = withAdaptivity(
  ({ viewWidth }) => {
    const [theme, setTheme] = useState("light");
    const [mainCoil, updateMainCoil] = useRecoilState(main);

    const platform = usePlatform();

    const isDesktop =
      viewWidth > 3 ||
      new URLSearchParams(window.location.search).get("vk_platform") ===
        "desktop_web";

    useEffect(() => {
      bridge.subscribe(({ detail: { type, data } }) => {
        if (type === "VKWebAppUpdateConfig")
          setTheme(data?.scheme.includes("light") ? "light" : "dark");
      });
    }, []);

    useEffect(() => {
      bridge.send("VKWebAppInit").then(() => console.log("VKWebAppInit"));

      updateMainCoil({
        ...mainCoil,
        isDesktop,
        platform,
      });
    }, []);

    return (
      <ConfigProvider
        locale={"ru"}
        isWebView={false}
        appearance={theme || "light"}
        platform={isDesktop ? "android" : platform}
      >
        <AppearanceProvider appearance={theme || "light"}>
          <AppRoot mode="full" className={isDesktop ? "desktop" : "mobile"}>
            <SnackbarProvider>
              <Navigation isDesktop={isDesktop} />
            </SnackbarProvider>
          </AppRoot>
        </AppearanceProvider>
      </ConfigProvider>
    );
  },
  {
    viewWidth: true,
  }
);

export default App;
