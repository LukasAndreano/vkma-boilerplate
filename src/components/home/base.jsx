import React from "react";
import { Button, Title } from "@vkontakte/vkui";

const Home = ({ toModal }) => {
  return (
    <>
      <Title weight={"3"} className={"mb10 centered"}>
        Привет, это boilerplate!
      </Title>
      <Button stretched onClick={() => toModal("hello")}>
        Открыть модалку!
      </Button>
    </>
  );
};

export default Home;
