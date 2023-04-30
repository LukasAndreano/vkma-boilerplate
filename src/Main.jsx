import React from "react";
import ReactDOM from "react-dom";

import {AdaptivityProvider} from "@vkontakte/vkui";
import {RecoilRoot} from "recoil";
import Router from "@reyzitwo/react-router-vkminiapps";

import structure from "/src/structure";
import "/src/assets/css/global.scss";

import App from "/src/App";
import api from "./modules/apiRequest";

const app = async () => {
    const initializeReq = await api("initialize", `GET`);

    ReactDOM.render(
        <RecoilRoot>
            <AdaptivityProvider>
                <Router structure={structure}>
                    <App initialize={initializeReq} />
                </Router>
            </AdaptivityProvider>
        </RecoilRoot>,
        document.getElementById("root")
    );
};

app().then(() => {
    if (import.meta.env.MODE === "development")
        import("/src/dev/eruda.js").then(({default: {}}) => {
        });
});
