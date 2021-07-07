![sample-image](https://raw.githubusercontent.com/Zubayer94/kanban-board-dnd/main/public/kanban-board.PNG)

# Kanban Board - dnd

An application with the concept of kanban board using ReactJS as a frontend Javascript Framework. Developed API using PHP Laravel framework with MySQL database to pass data front to back. In this board you can add your `todo` lists and smoothly `Drag and Drop` those lists into `in progress` or `done` board. Drag and Drop is fun...

## Built With

<a href='//laravel.com'><img align="left" width='300px' src="https://camo.githubusercontent.com/5ceadc94fd40688144b193fd8ece2b805d79ca9b/68747470733a2f2f6c61726176656c2e636f6d2f6173736574732f696d672f636f6d706f6e656e74732f6c6f676f2d6c61726176656c2e737667"></a>

<a href='//reactjs.org/'><img width='100px' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></a>

## Install and Run

-   clone project .
-   install composer dependencies using `composer install` (of course you need, php and composer .
-   create `.env` file by copying from `.env.example` .
-   run `php artisan key:generate` command, this will get APP_KEY in `.env` file .
-   create database and fill information in `.env' file .
-   now run migrations for creating table `php artisan migrate` .
-   run `php artisan passport:install` for generating access tokens.
-   Now run `php artisan db:seed`, for seeding data to the database.
-   Now run `php artisan optimize:clear`.
-   For setting base url go to `root/js/bootstrap.js` file, find `window.axios.defaults.baseURL = 'http://demo-site.test/api'` fill url to call API from backend.
-   Finally run `npm run dev` which will run your app on local server.
-   That's It, You can modify and create a pull request, Thanks.

---

## Features

⚡️ Add todo list.\
⚡️ Created Drag & Droppable function.\
⚡️ Drag & Drop item smoothly into `Todo` or `In progress` or `Done` field.\
⚡️ Manage state with context api, laravel api call & Mysql.\
⚡️ Managed UI design with custom css.

---

## Technologies used 🛠️

🪓 axios\
🪓 notyf\
🪓 lodash\
🪓 react-beautiful-dnd
