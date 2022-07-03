import React, { Suspense, lazy } from "react";
import { ModalRoot } from "@vkontakte/vkui";
import ModalCardConstructor from "/src/components/__global/ModalCardConstructor";
import { Icon56Fire } from "@vkontakte/icons";

const Hello = lazy(() => import("/src/components/__modals/Hello"));

const MainStack = ({ modal, toBack }) => {
  return (
    <ModalRoot activeModal={modal} onClose={toBack}>
      <ModalCardConstructor
        close={toBack}
        title={"Привет мир!"}
        id={"hello"}
        icon={<Icon56Fire />}
      >
        <Suspense fallback={""}>
          <Hello />
        </Suspense>
      </ModalCardConstructor>
    </ModalRoot>
  );
};

export default MainStack;
