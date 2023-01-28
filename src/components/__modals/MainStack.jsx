import React from "react";
import { ModalRoot } from "@vkontakte/vkui";
import ModalCardConstructor from "/src/components/__global/ModalCardConstructor";
import { Icon56Fire } from "@vkontakte/icons";
import Hello from "./Hello";
import ModalConstructor from "../__global/ModalConstructor";

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

      <ModalConstructor id={"fullModal"} title={"Фулл модал"} close={toBack}>
        Body
      </ModalConstructor>
    </ModalRoot>
  );
};

export default MainStack;
