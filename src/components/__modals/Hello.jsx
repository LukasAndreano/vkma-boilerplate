import { Button, Text } from "@vkontakte/vkui";

const Hello = () => {
  return (
    <>
      <Text className={"centered mt5"}>Какое-то крутое описание и кнопка!</Text>

      <Button className={"mt10"} stretched>
        Hello!
      </Button>
    </>
  );
};

export default Hello;
