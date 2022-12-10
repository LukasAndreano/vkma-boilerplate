# 👨🏻‍💻 VK Mini App Boilerplate

### ❓Что это такое ❓

Это стартовый кит _(шаблон)_ для создания сервиса на платформе [VK Mini Apps](https://vk.com/services).

Используемые в ките технологии / библиотеки / фреймворки:

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

### 💡 Идея работы со стейтом (Recoil)

Каждая группа должна содержать свой атом _(storage/atoms/<name>.js)_, который не будет выходить за рамки этой группы или, в крайнем случае, только для модалок.

Пример атома в _(storage/atoms/main.js)_

### 📚 Как работать с группами (панелями/экранами)

У каждой группы есть своя директория в _components_, например: _components/home_.

В группах присутствует главный экран - _base.js_ и другие дополнительные: _anyScreenName.js_.

В каждом компоненте могут присутствовать блоки, которые необходимо вынести в отдельный компонент, чтобы сохранить нормальную логическую структуру и не перегрузить этот самый компонент.

Названия таких компонентов должно начинаться с маленькой буквы. Например: usersStatistic.js.

Также присутствуют общие группы _(в components)_ со следующими названиями:

- \_\_global
- \_\_modals
- \_\_navigation

Все эти разделы содержат в себе основные для работы приложения компоненты: навигация, модалки, а также **глобальные компоненты** (компоненты, которые могут быть переиспользованы n-ное количество раз в абсолютно разных частях приложения без привязки к группе компонентов).

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
