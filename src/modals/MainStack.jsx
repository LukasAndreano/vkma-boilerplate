import { ModalRoot, useRouterModal } from "@kokateam/router-vkminiapps";
import { Icon56CheckCircleOutline } from "@vkontakte/icons";
import Hello from "./Hello";
import ModalCardConstructor from "../components/__global/ModalCardConstructor";
import ModalConstructor from "../components/__global/ModalConstructor";
import React from "react";
import FullModal from "./FullModal";

const MainStack = () => {
	const [, toModal] = useRouterModal();

	return (
		<ModalRoot>
			<ModalCardConstructor
				close={() => toModal(-1)}
				title={"Вау, это работает!"}
				id={"helloModal"}
				icon={<Icon56CheckCircleOutline />}
			>
				<Hello />
			</ModalCardConstructor>

			<ModalConstructor
				id={"fullModal"}
				title={"А это уже интересно!"}
				settlingHeight={100}
				close={() => toModal(-1)}
			>
				<FullModal />
			</ModalConstructor>
		</ModalRoot>
	);
};

export default MainStack;
