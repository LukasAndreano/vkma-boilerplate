import { render } from "react-dom";

import { AdaptivityProvider } from "@vkontakte/vkui";
import { RouterRoot } from "@kokateam/router-vkminiapps";

import App from "./App";
//import api from "./modules/apiRequest";

import "./assets/css/global.scss";

const app = async () => {
  // const initializeReq = await api("initialize", `GET`);

  render(
    <RouterRoot>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </RouterRoot>,
    document.getElementById("root")
  );
};

app().then(() => {
  if (import.meta.env.MODE === "development")
    import("./dev/eruda").then(({ default: {} }) => {});
});
