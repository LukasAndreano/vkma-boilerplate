import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  AppRoot,
  ConfigProvider,
  useAdaptivityWithJSMediaQueries,
  usePlatform,
} from "@vkontakte/vkui";

import Navigation from "/src/Navigation";
import bridge from "@vkontakte/vk-bridge";
import main from "/src/storage/atoms/main";
import SnackbarProvider from "./components/__global/SnackbarProvider";

bridge.send("VKWebAppInit").then(() => console.log("VKWebAppInit"));

const App = () => {
  const [theme, setTheme] = useState("light");
  const [mainCoil, updateMainCoil] = useRecoilState(main);

  const platform = usePlatform();
  const { viewWidth } = useAdaptivityWithJSMediaQueries();

  const isDesktop = viewWidth >= 3 || platform === "vkcom";

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig" && data?.appearance)
        setTheme(data.appearance);
    });
  }, []);

  useEffect(() => {
    updateMainCoil({
      ...mainCoil,
      isDesktop,
      platform,
    });
  }, [isDesktop, platform]);

  return (
    <ConfigProvider
      locale={"ru"}
      isWebView={true}
      appearance={theme}
      platform={isDesktop ? "android" : platform}
      hasCustomPanelHeaderAfter
    >
      <AppRoot mode="full" userSelectMode={"disabled"}>
        <SnackbarProvider>
          <Navigation isDesktop={isDesktop} />
        </SnackbarProvider>
      </AppRoot>
    </ConfigProvider>
  );
};

export default App;
