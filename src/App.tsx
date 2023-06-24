import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import {
  AppearanceProvider,
  AppRoot,
  ConfigProvider,
  usePlatform,
  withAdaptivity,
} from "@vkontakte/vkui";

import { SnackbarProvider } from "./components/__global";
import Navigation from "./Navigation";

import bridge from "@vkontakte/vk-bridge";
import main from "./storage/atoms/main";

const App = withAdaptivity(
  ({ viewWidth }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [, updateMainCoil] = useRecoilState(main);

    const platform = usePlatform();

    const isDesktop =
      (viewWidth && viewWidth > 3) ||
      new URLSearchParams(window.location.search).get("vk_platform") ===
        "desktop_web";

    useEffect(() => {
      bridge.subscribe(({ detail: { type, data } }) => {
        if (type === "VKWebAppUpdateConfig") {
          // @ts-ignore
          setTheme(data?.scheme.includes("light") ? "light" : "dark");
        }
      });
    }, []);

    useEffect(() => {
      bridge.send("VKWebAppInit").then(() => console.log("VKWebAppInit"));

      updateMainCoil((prev) => ({
        ...prev,
        isDesktop,
        platform,
      }));
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
