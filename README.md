Sass install without vsCode
=> First npm init
=> Second npm install node-sass --save
=> Then Under package.json file
    under script section:-
    "scripts": {
    "compile:sass": "node-sass main.scss Css/style.css -w"
  },
  and Last
  => Fourth npm run compile:sass
