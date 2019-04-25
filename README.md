# React Boilerplate

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

### Dependencies:

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

### Directory Structure

```
root/
  config/  **holds webpack config files   (webpack.common.js, webpack.dev.js, webpack.prod.js)**
  src/
    js/
     components/
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
