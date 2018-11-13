# Gemini starter

## Что потребуется установить в систему

1. Java Development Kit (JDK) версии 8.
Страница загрузки - https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
2. Python версии 2.7.
Страница загрузки https://www.python.org/downloads/
3. Node.js версии не ниже 8.
Страница загрузки - https://nodejs.org/en/download/
4. `npm install -g gemini`
5. `npm install -g selenium-standalone`

## Пользователям Windows 
1. После установки JDK и Python добавить их пути до директорий содержащих исполняемые файлы в переменную окружения PATH
2. Установить Visual Studio Build Tools командой `npm install --global --production windows-build-tools `

Может возникнуть проблема с модулем `wd`, тогда потребуется его переустановка:
1. `npm uninstall wd`
2. `npm install -D wd`

## Конфигурация
В файле `.gemini.js` согласно [документации](https://gemini-testing.github.io/).

## Тест-кейсы
Писать в папке gemini.

## Тестирование без GUI
1. Запустить сервер selenium `npm run selenium:start`
2. Если у вас нет эталонных изображений, и вы готовы взять за эталон текущую вёрстку - `npm gemini:update` 
(оригинальная команда `gemini update`) 
3. В новом окне выполнить команду `npm test` (оригинальная команда `gemini test`). Запуск без эталонных изображений
вернет неуспешный результат тестирования.

## Запуск GUI

Выполните команду `npm start`.
После выполнения этой команды произойдут следующие действия:
- установит npm-модули
- установит драйверы selenium
- запустит сервер selenium
- запустит gemini-gui (откроется страница по адресу http://localhost:8000/)

Последние 2 команды работаю параллельно.

Для остановки выполнить `Ctrl + C`

## Отчёты
После запуска тестирования создаются html-отчёты в папке `out/gemini-reports`

## Ссылки

- [Документация gemini](https://gemini-testing.github.io/)
- [Проект gemini](https://github.com/gemini-testing/gemini)
- [Проект gemini-gui](https://github.com/gemini-testing/gemini-gui)
- [Домашняя страница gemini](https://tech.yandex.ru/gemini/)
- [Видео: Доклад на OdessaJS](https://www.youtube.com/watch?v=k0RDoEBqeU8)
- [Видео: Я.Субботник по фронтенду](https://www.youtube.com/watch?v=lfashGLaPpg)
- [Статья: Как мы тестируем CSS-регрессии с Gemini. Доклад на BEMup в Яндексе](https://habrahabr.ru/company/yandex/blog/238323/)
