import { ReactNode } from "react";

import { ModalCard } from "@vkontakte/vkui";

interface ModalCardConstructorI {
  id: string;
  close(): void;
  title?: string;
  icon?: ReactNode;
  className?: string;
  actions?: ReactNode;
  children: ReactNode;
}

const ModalCardConstructor = ({
  id,
  close,
  title = "",
  icon = "",
  actions,
  className = "",
  children,
}: ModalCardConstructorI) => {
  return (
    <ModalCard
      className={className}
      id={id}
      onClose={() => close()}
      header={title}
      icon={icon}
      actions={actions}
    >
      {children}
    </ModalCard>
  );
};

export default ModalCardConstructor;
