import { ModalRoot, useRouterModal } from "@kokateam/router-vkminiapps";
import { Button } from "@vkontakte/vkui";
import { Icon56Fire } from "@vkontakte/icons";
import Hello from "./Hello";
import ModalCardConstructor from "../__global/ModalCardConstructor";
import ModalConstructor from "../__global/ModalConstructor";

const MainStack = () => {
  const [, toModal] = useRouterModal();

  return (
    <ModalRoot>
      <ModalCardConstructor
        close={() => toModal(-1)}
        title={"Привет мир!"}
        id={"hello"}
        icon={<Icon56Fire />}
      >
        <Hello />
      </ModalCardConstructor>

      <ModalConstructor
        id={"fullModal"}
        title={"Фулл модал"}
        close={() => toModal(-1)}
      >
        <Button stretched onClick={() => toModal("fullModal2")}>
          Открыть модалку!
        </Button>
      </ModalConstructor>

      <ModalConstructor
        id={"fullModal2"}
        title={"Фулл модал #2"}
        close={() => toModal(-1)}
      >
        <Button stretched onClick={() => toModal("fullModal3")}>
          Открыть модалку!
        </Button>
      </ModalConstructor>

      <ModalConstructor
        id={"fullModal3"}
        title={"Фулл модал #3"}
        close={() => toModal(-1)}
      >
        Body
      </ModalConstructor>
    </ModalRoot>
  );
};

export default MainStack;
