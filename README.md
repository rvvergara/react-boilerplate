# React Boilerplate

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [package.json scripts](#package.json-scripts)
- [Usage](#usage)
  - [New Projects](#new-projects)
  - [Existing Projects](#existing-projects)
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

- Development equivalent of @babel/runtime:

```
@babel/plugin-transform-runtime
```

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
    "build": "cross-env NODE_ENV=production webpack -p --config config/webpack.prod.js",
    "start": "cross-env NODE_ENV=development webpack-dev-server --config config/webpack.dev.js",
    "dev": "cross-env NODE_ENV=development webpack --config config/webpack.dev.js",
    "test": "cross-env NODE_ENV=test jest --config jest.config.json"
},
```

### Usage

### New projects

**After installation modify the following to customize based on project:**

```
change directory name from react-boilerplate to your project name

src/index.html ** change page title **

src/js/index.js ** remove uncessary template jsx component or keep it for testing app during first time running the dev-server

src/css/base/_base.html ** change any base settings to conform to your project needs

src/css/base/_base.html ** change any or all variables or remove altogether to write entirely your own
```

### Existing Projects:

1. Copy and paste to your package.json's devDepedencies (dependencies directly affecting your work with React):

```
    "@babel/core": "^7.4.3",
    "@babel/plugin-transform-runtime": "^7.4.3",
    "@babel/preset-env": "^7.4.3",
    "@babel/preset-react": "^7.0.0",
    "babel-cli": "^6.26.0",
    "babel-loader": "^8.0.5",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "cross-env": "^5.2.0",
    "css-loader": "^2.1.1",
    "dotenv": "^8.0.0",
    "enzyme": "^3.9.0",
    "enzyme-adapter-react-16": "^1.12.1",
    "enzyme-to-json": "^3.3.5",
    "eslint": "^5.16.0",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "^2.17.2",
    "eslint-plugin-jsx-a11y": "^6.2.1",
    "eslint-plugin-react": "^7.12.4",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.7.1",
    "mini-css-extract-plugin": "^0.6.0",
    "node-sass": "^4.11.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "sass-loader": "^7.1.0",
```

2. Copy and paste the following into your package.json's dependencies:

```
    "@babel/runtime": "^7.4.3",
    "normalize.css": "^8.0.1",
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "webpack-merge": "^4.2.1"
```

3. If your project already has a webpack.config.js, make sure you have the following lines:

```
** inside the module rules: **

{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['transform-class-properties', '@babel/plugin-transform-runtime'],
        },
      },
```

4. If your project uses React Router you may wanna add the following line into the devServer part of webpack config file to ensure that for all routes the server will just render index.html and allow the react router to be the one to change the view (client side rendering):

```
  historyApiFallback: true,
```

5. If you already have jest installed in your project just make sure to create a jest.config.json in the project root and copy the contents in this boilerplate's own jest.config.json

6. To ensure usage of ES2015 import statements in Jest, ensure you have a .babelrc file in the project root (copy the contents in this boilerplate's own .babelrc)

7. If you are unsure which packages and configurations to copy in your project just copy all those that aren't currently not in your package.json, making sure all the scripts are also the same. And copy all webpack related configs in the right directories specified in this boilerplate.

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
    public/
      index.html
      images/
        favicon.ico
    test/
     components/
     fixtures/
  (root level files):
  .babelrc  ** necessary only to ensure Jest accepts ES6 import statements **
  .eslintrc ** ESLint configurations and rules **
  .gitignore
  jest.config.js **contains all necessary configs for jest**
  README.md
  package.json
```

### Maintainer

[Ryan Vergara](https://github.com/rvvergara)

PRs accepted

### License

MIT ©2019 RyanV
