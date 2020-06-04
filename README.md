# Star Wars App

This Star Wars App displays information about the first 6 star wars films. Data is taken from an online API

The purpose of creating this app was to demonstrate the following:
* The ability to setup a simple Vue app
* Reading data from an online API
* Make requests using Promise.all
* Implement filters in Vue.js

The App carrys out the following:
* Displays a list of the first 6 Star Wars movies
* Clicking on a movie will give you details of the movie including the title, episode number, release date, director, characters and character homeworlds
* Character heights are filtered from centimeters to meters using Vues filters
* Film release dates are converted from MM DD YYY to DD MM YYY format using a Vue filter
* Vue routing is used so that when the user clicks on the 'Movie Opening' link, they are taken to a new page showing the movie intro scrawl

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
