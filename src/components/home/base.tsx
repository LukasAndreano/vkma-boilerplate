import { useRouterHooks } from "@kokateam/router-vkminiapps";

import { Button, Title } from "@vkontakte/vkui";
import toast from "react-hot-toast";

const Home = () => {
  const { toModal, toPanel } = useRouterHooks();

  return (
    <>
      <Title weight={"3"} className={"mb10 centered"}>
        Привет, это boilerplate!
      </Title>
      <Button stretched onClick={() => toModal("hello")}>
        Открыть модалку!
      </Button>
      <Button
        stretched
        onClick={() => toast.success("Да, это тост")}
        className={"mt5"}
      >
        Toast!
      </Button>
      <Button stretched onClick={() => toModal("fullModal")} className={"mt5"}>
        Открыть модалку полную!
      </Button>
      <Button className={"mt5"} stretched onClick={() => toPanel("home2")}>
        Открыть панель!
      </Button>
    </>
  );
};

export default Home;
