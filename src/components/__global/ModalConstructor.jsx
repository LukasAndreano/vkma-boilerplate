import { useRecoilValue } from "recoil";

import {
  ANDROID,
  Group,
  IOS,
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
            platform === IOS && (
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
            platform === ANDROID && <PanelHeaderClose onClick={close} />
          }
        >
          {title}
        </ModalPageHeader>
      }
    >
      <Group>
        <div className={"panelPadding"}>{children}</div>
      </Group>
    </ModalPage>
  );
};

export default ModalConstructor;
