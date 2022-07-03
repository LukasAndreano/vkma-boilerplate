import React from "react";
import ReactDOM from "react-dom";

import { AdaptivityProvider } from "@vkontakte/vkui";
import { RecoilRoot } from "recoil";
import Router from "@reyzitwo/react-router-vkminiapps";

import structure from "/src/structure";
import "/src/assets/css/global.scss";

import App from "/src/App";
import themeManager from "/src/modules/themeManager";

const app = async () => {
  const themeController = new themeManager();

  ReactDOM.render(
    <RecoilRoot>
      <AdaptivityProvider>
        <Router structure={structure}>
          <App themeController={themeController} />
        </Router>
      </AdaptivityProvider>
    </RecoilRoot>,
    document.getElementById("root")
  );
};

app().then(() => {
  if (import.meta.env.MODE === "development")
    import("/src/dev/eruda.js").then(({ default: {} }) => {});
});
