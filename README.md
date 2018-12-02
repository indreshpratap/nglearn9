# Self Assessment System / Survey System

## How to run server/and Angular App

* We have added few server dependencies in our package.json so please install those by running `npm install`.
* After that you can run server `npm run server` in separate command prompt, leave it open.
* Then run `npm start` in another command to run angular app.


## How to deploy
* Through proxy  run a web server upload your angular app in prod machine directory and configure your web server to serve `index.html` on path `/` and for `api` use proxy settings of web server.
* Second is you can bundle your app in your web application as well, configure your web app to serve `index.html` on your root context `/`.

