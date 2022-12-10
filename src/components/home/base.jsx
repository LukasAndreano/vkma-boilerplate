import React from "react";
import { Button, Title } from "@vkontakte/vkui";

const Home = ({ toModal, toPanel }) => {
  return (
    <>
      <Title weight={"3"} className={"mb10 centered"}>
        Привет, это boilerplate!
      </Title>
      <Button stretched onClick={() => toModal("hello")}>
        Открыть модалку!
      </Button>
      <Button className={"mt5"} stretched onClick={() => toPanel("home2")}>
        Открыть панель!
      </Button>
    </>
  );
};

export default Home;
