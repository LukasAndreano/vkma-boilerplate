import "/src/assets/css/global.scss";

import { createRoot } from "react-dom/client";
import { RouterRoot } from "@kokateam/router-vkminiapps";
import { AdaptivityProvider } from "@vkontakte/vkui";

import App from "/src/App";

const app = async () => {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <RouterRoot>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </RouterRoot>,
  );
};

app().then(() => {
  if (import.meta.env.MODE === "development")
    import("/src/dev/eruda.js").then(({ default: {} }) => {});
});
