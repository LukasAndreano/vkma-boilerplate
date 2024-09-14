import React from "react";
import { Button, Card, FormItem, Input, Text } from "@vkontakte/vkui";
import { useRouterBack } from "@kokateam/router-vkminiapps";

const FullModal = () => {
  const toBack = useRouterBack();

  return (
    <>
      <Card className={"p5"}>
        <Text className={"centered"}>
          Это модалка в виде страницы. <br />
          <br /> Полезно, если нужен ввод от юзера в какую-нибудь форму.
        </Text>
      </Card>

      <FormItem top={"Ваше имя"}>
        <Input placeholder={"Введите имя"} />
      </FormItem>

      <FormItem top={"Ваша фамилия"}>
        <Input placeholder={"Введите фамилию"} />
      </FormItem>

      <Button
        stretched
        size={"l"}
        className={"mt10"}
        onClick={() => toBack(-2)}
      >
        Понятно
      </Button>
    </>
  );
};

export default FullModal;
