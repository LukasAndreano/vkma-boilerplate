import {
  AppearanceProvider,
  AppRoot,
  ConfigProvider,
  usePlatform,
  withAdaptivity,
} from "@vkontakte/vkui";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import main from "/src/storage/reducers/main";
import bridge from "@vkontakte/vk-bridge";
import SnackbarProvider from "/src/components/__global/SnackbarProvider";
import Navigation from "/src/Navigation";

const App = withAdaptivity(
  ({ viewWidth, themeController }) => {
    const [theme, setTheme] = useState("light");
    const [mainCoil, updateMainCoil] = useRecoilState(main);

    const platform = usePlatform();

    const isDesktop = viewWidth >= 3;

    useEffect(() => {
      bridge.subscribe(({ detail: { type, data } }) => {
        if (type === "VKWebAppUpdateConfig") {
          setTheme(data.scheme.includes("light") ? "light" : "dark");
          themeController.setTheme(data.scheme);
        }
      });
    }, []);

    useEffect(() => {
      bridge.send("VKWebAppInit");

      updateMainCoil({
        ...mainCoil,
        isDesktop,
        platform,
      });
    }, []);

    return (
      <ConfigProvider
        locale={"ru"}
        isWebView
        platform={isDesktop ? "android" : platform}
      >
        <AppearanceProvider appearance={theme}>
          <AppRoot mode="full">
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
