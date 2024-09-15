import { Button, Text } from "@vkontakte/vkui";
import { useRouterModal } from "@kokateam/router-vkminiapps";

const Hello = () => {
	const [, toModal] = useRouterModal();

	return (
		<>
			<Text className={"centered mt5 mb5"}>
				Это базовая модалка в виде карточки. Полезно, если нужно отобразить,
				например, какое-то описание.
			</Text>

			<Button
				size={"l"}
				className={"mt10"}
				stretched
				onClick={() => toModal("fullModal")}
			>
				К следующей модалке
			</Button>
		</>
	);
};

export default Hello;
