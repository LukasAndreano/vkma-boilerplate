import { render } from "react-dom";

import { AdaptivityProvider } from "@vkontakte/vkui";
import { RouterRoot } from "@kokateam/router-vkminiapps";

import App from "/src/App";
import api from "./modules/apiRequest";

import "/src/assets/css/global.scss";

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
    import("/src/dev/eruda.js").then(({ default: {} }) => {});
});
