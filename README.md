# React Boilerplate

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [package.json scripts](#package.json-scripts)
- [Usage](#usage)
- [Running Automated Tests](#running-automated-tests)
- [Maintainer](#maintainer)
- [License](#license)

### Motivation

Building React apps is one of the most important skills web developers must have. Seeing your working app run and enjoyed by your friends can be a satisfying experience. Working on the apps itself should also be very satisfying.

Building from scratch is still best done by using `create-react-app` for most novices and intermediate React developers. You can be sure that all the necessary packages and configurations will work. All you need is run that command.

However, converting an existing vanilla JS or jQuery app may be cumbersome if you need to copy all your logic code into an entirely new react app. This is the main motivation for this boilerplate. By no means it's the best boilerplate for building new react apps or migrating existing apps into react but it sure serves its purpose well.

### Installation:

Clone the repository:

```
git clone git@github.com:rvvergara/react-boilerplate.git
```

then:

```
cd react-boilerplate
```

Then run to install (To ensure the packages are updated first run `yarn update` or `npm update` first)

```
yarn
```

or

```
npm -i
```

### Dependencies :

(see Comments in `/config/webpack.common.js`, `.babelrc`)

`@babel/runtime` - Added in order to _remove regeneratorRunTime is not defined_ error when using asynchronous code

`normalize.css` - To render all html elements consistently accross all browsers

`prop-types` - To enable prop type validations

`webpack-merge` - To be able to split webpack config files (merging common configs to respective dev and production configs)

`react` and `react-dom` - Main react packages for the web

### Dev Dependencies:

- Main babel related packages for transpiling into pre ES2015 JavaScript:

```
@babel/core
@babel/preset-env
@babel/preset-react
babel-cli
babel-loader
```

`@babel/plugin-transform-runtime` -

- To enable use of arrow functions and class properties in React class based components:

```
babel-plugin-transform-class-properties
```

- Needed to import CSS/SCSS files:

```
css-loader
node-sass
sass-loader
```

- ESLint packages (AirBNB Style Guide enforced) with React styles:

```
eslint
eslint-config-airbnb
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-react
```

- To allow importing of files (images, etc), resolving them into urls and outputs them into the output directory

```
file-loader
```

- Test suite for unit testing:

```
jest
```

- To emit html files into the output directory

```
html-webpack-plugin
```

- To emit css files into the output directory and minify them for production

```
mini-css-extract-plugin
optimize-css-assets-webpack-plugin
```

- To minify .js files in the output directory for production

```
terser-webpack-plugin
```

- Webpack packages

```
webpack
webpack-cli
webpack-dev-server
```

### package.json scripts:

```
"scripts": {
    "build": "webpack --config config/webpack.prod.js",
    "start": "webpack-dev-server --config config/webpack.dev.js",
    "dev": "webpack --config config/webpack.dev.js",
    "test": "jest"
},
```

### Usage

**After installation modify the following to customize based on project:**

```
src/index.html ** change page title **

src/js/index.js ** remove uncessary template jsx component or keep it for testing app during first time running the dev-server

src/css/base/_base.html ** change any base settings to conform to your project needs

src/css/base/_base.html ** change any or all variables or remove altogether to write entirely your own
```

After modifying run to start dev-server:

```
yarn start
```

or

```
npm start
```

### Running Automated Tests

Run for testing currently opened js files:

```
yarn test --watch
```

or

```
npm test --watch
```

Use

```
yarn test --watchAll
```

or

```
npm test --watchAll
```

to run automated tests on all JS files

### Directory Structure

```
root/
  config/  **holds webpack config files   (webpack.common.js, webpack.dev.js, webpack.prod.js)**
  src/
    js/
     components/ ** React Components **
    css/
     base/
      _base.scss  **contains general styles**
      _settings.scss  **contains all style variables**
     components/  **styles for each React Component**
     main.scss  **imports all separate scss files**
    test/
     components/
     fixtures/
  (root level files):
  .babelrc  ** necessary only to ensure Jest accepts ES6 import statements **
  .eslintrc ** ESLint configurations and rules **
  .gitignore
  README.md
  package.json
```

### Maintainer

[Ryan Vergara](https://github.com/rvvergara)

PRs accepted

### License

MIT ©2019 RyanV
