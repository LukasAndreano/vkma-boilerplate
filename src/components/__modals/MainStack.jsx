import React from "react";
import { ModalRoot } from "@vkontakte/vkui";
import ModalCardConstructor from "/src/components/__global/ModalCardConstructor";
import { Icon56Fire } from "@vkontakte/icons";
import Hello from "./Hello";

const MainStack = ({ modal, toBack }) => {
  return (
    <ModalRoot activeModal={modal} onClose={toBack}>
      <ModalCardConstructor
        close={toBack}
        title={"Привет мир!"}
        id={"hello"}
        icon={<Icon56Fire />}
      >
        <Hello />
      </ModalCardConstructor>
    </ModalRoot>
  );
};

export default MainStack;
