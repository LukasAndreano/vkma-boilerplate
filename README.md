# Шаблон для создания сервиса на платформе VK Mini Apps

### Краткое описание

Это стартовый кит (шаблон) для создания сервиса на платформе [VK Mini Apps](https://vk.com/services).  
Цель этого кита - ускорить создание сервисов, которые не требуют отдельных UI-компонентов.

Используемые в технологии / библиотеки / фреймворки:

- [React](https://reactjs.org/)
- [Recoil](https://recoiljs.org/)
- [VKMA Router](https://github.com/reyzitwo/react-router-vkminiapps)

### ⚙️ Начало работы

Склонируйте репозиторий в нужную вам директорию:

```bash
git clone https://github.com/LukasAndreano/vkma-boilerplate.git <name>
```

Установите зависимости и запустите приложение:

```bash
cd <name>
yarn
yarn dev
```

Далее перейдите в **настройки** сервиса и в адресе разработки (web & mvk) укажите:

```
http://localhost:3000
```

### 💡 Принцип работы со стейтом (Recoil)

Каждая группа должна содержать свой атом _(storage/atoms/<name>.js)_, который не будет выходить за рамки этой группы или, в крайнем случае, только для модалок.

Пример атома в _(storage/atoms/main.js)_

### 📚 Как работать с группами (панелями/экранами)

У каждой группы есть своя директория в _panels_, например: _panels/home_.

В группах присутствует главный экран - _{panelName}.js_ и другие дополнительные: _anyScreenName.js_.

В каждом компоненте могут присутствовать блоки, которые необходимо вынести в отдельный компонент, чтобы сохранить нормальную логическую структуру и не перегрузить этот самый компонент.

Названия таких компонентов должно начинаться с маленькой буквы. Например: usersStatistic.js.

Также присутствуют общие группы _(в components)_ со следующими названиями:

- \_\_global
- \_\_navigation

Модалки не привязаны к общим группам и имеют свою собственную директорию в _modals_.

Все эти разделы содержат в себе основные для работы приложения компоненты: навигация, а также **глобальные компоненты** (компоненты, которые могут быть переиспользованы n-ное количество раз в абсолютно разных частях приложения без привязки к группе компонентов).

### 📺 Модалки

Для создания модальных страниц _(ModalPage)_ используется специальный конструктор: **ModalConstructor**, а для модальных карточек _(ModalCard)_: **CardConstructor**.

Применение ModalConstructor:

```javascript
<ModalConstructor id="start" title="Заголовок" close={toBack}>
  Любой children
</ModalConstructor>
```

Применение CardConstructor:

```javascript
<CardConstructor
  id="start"
  close={toBack}
  title="Заголовок"
  icon={<Icon56DonateOutline />}
>
  Любой children
</CardConstructor>
```
