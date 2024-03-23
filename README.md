# Интерфейс поиска пользователей github

## Ссылка на проект
<a href="https://zai-elina.github.io/git-search-app/">https://zai-elina.github.io/git-search-app/</a>

## Описание проекта

Этот проект представляет собой платформу для поиска пользователей github по логину. Данные по пользователям берем с https://api.github.com/search/users?q={имя пользователя} (документация: https://developer.github.com/v3/search/#search-users).

## Функционал

- поиск: по логину;
- сортировка: по количеству репозиториев (возрастанию/убыванию);
- пагинация;
- при клике на элемент открываются подробности.

## Разработчик

Зайнуллина Элина Ринатовна

## Как запустить проект

1. Убедитесь, что у вас установлен Node.js: https://nodejs.org/
2. Клонируйте репозиторий на свой компьютер: `git clone git@github.com:zai-elina/git-search-app.git`
3. Перейдите в директорию проекта: `cd git-search-app`
4. Установите зависимости: `npm install`
5. Создайте файл .env.local и запишите туда personal access tokens с сайта github, пример записи находится в файле .env.local.example. Если у вас нет токена создайте, исходя из указаний https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
6. Запустите проект: `npm run start`
7. Откройте браузер и перейдите по адресу `http://localhost:3000`

## Test

1. Запустите тесты: `npm run test`

## Technology stack

- Язык программирования: TypeScript
- React
- Redux Toolkit
- RTK Query
- React Router DOM
- React Hook Form
- Styled Components
- Jest
- EsLint
