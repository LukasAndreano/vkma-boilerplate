import { ModalCard } from "@vkontakte/vkui";

const ModalCardConstructor = ({
  id,
  close,
  title = "",
  icon = "",
  children,
  className = "",
  actions,
}) => {
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
