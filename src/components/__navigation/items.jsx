import { Icon24HomeOutline, Icon24UserCircleOutline } from "@vkontakte/icons";

/**
 * Элемент навигации
 * @typedef {Object} NavigationItem
 * @property {string} id - Уникальный идентификатор раздела.
 * @property {string} title - Название раздела.
 * @property {string} description - Описание раздела.
 * @property {React.ReactNode} icon - Иконка для отображения в разделе.
 */

/**
 * Массив навигации
 * @type {NavigationItem[]}
 */
const navigationItems = [
  {
    id: "home",
    title: "Главная",
    description: "Описание раздела",
    icon: <Icon24HomeOutline />,
  },
  {
    id: "profile",
    title: "Профиль",
    description: "Описание раздела",
    icon: <Icon24UserCircleOutline />,
  },
];

export default navigationItems;
