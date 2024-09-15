import { useRecoilValue } from "recoil";

import {
	Group,
	ModalPage,
	ModalPageHeader,
	PanelHeaderButton,
	PanelHeaderClose,
} from "@vkontakte/vkui";
import { Icon24Dismiss } from "@vkontakte/icons";

import { getIsDesktop, getPlatform } from "/src/storage/selectors/main";

const ModalConstructor = ({
	id,
	close,
	title = "",
	children,
	className = "",
	dynamicContentHeight = false,
}) => {
	const isDesktop = useRecoilValue(getIsDesktop);
	const platform = useRecoilValue(getPlatform);

	return (
		<ModalPage
			className={className}
			dynamicContentHeight={dynamicContentHeight}
			nav={id}
			onClose={close}
			header={
				<ModalPageHeader
					after={
						!isDesktop &&
						platform === "ios" && (
							<PanelHeaderButton
								aria-label={"Закрытие модального окна"}
								onClick={close}
							>
								<Icon24Dismiss />
							</PanelHeaderButton>
						)
					}
					before={
						!isDesktop &&
						platform === "android" && <PanelHeaderClose onClick={close} />
					}
				>
					{title}
				</ModalPageHeader>
			}
		>
			<Group className={"p16"}>{children}</Group>
		</ModalPage>
	);
};

export default ModalConstructor;
