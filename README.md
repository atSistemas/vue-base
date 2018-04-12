![Vue-Base logo](./src/app/assets/images/vue-base-logo.png)

# Vue-Base

![Npm-Version](https://img.shields.io/badge/npm-6.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

**A modular platform for Redux Isomorphic applications**

This repository is a modular abstraction to build a [VueJS](https://vuejs.org/) web application based on [Redux](https://vuex.vuejs.org/en/intro.html) paradigm.
You can use it to quickly scaffold your Vue web application projects and development environments.

This seed should clarify how to wire up all the modules of your application, even when we understand that in some cases
there must be some changes needed by the structure to fit your needs correctly

## Overview

**Vue-Base** makes use of the latest tools to improve your workflow, and enables you to create future ready applications:

- [Vuex](https://vuex.vuejs.org/en/intro.html) based architecture
- [Webpack 3](https://webpack.github.io/) build configuration depending on enviroment 
- Development & Production server using [express](https://github.com/expressjs/express) and [webpack-dev-server](https://webpack.github.io/)
- Hot Reload/Live Reload support for Js & Css using  [Webpack HMR](https://webpack.github.io/docs/hot-module-replacement.html)
- ES6 transpilation using [Babel](https://babeljs.io/)
- [PostCSS](http://postcss.org/) processing with isomorphic support.
- [CssModules](https://github.com/css-modules/css-modules) based
- Code Linting using [Eslint](https://github.com/eslint/eslint)
- [Standard](https://standardjs.com/) Javascript Standard Style
- SSR - Server Side Rendering ...coming soon :)

## Getting Started

To get you started, you need to meet the prerequisites, and then follow the installation instructions.

### Prerequisites

Vue-Base makes use a number of NodeJS tools to initialize and test Vue-Base. You must have node.js 6.2.0 at least, and its package manager (npm) installed. You can get it from [nodejs.org](node).

### Installing

You can clone our Git repository:

`$ git clone https://github.com/atSistemas/vue-base.git`

This method requires Git to be installed on your computer. You can get it from
[here](http://git-scm.com).

### Wiring up your development environment

Setting up **Vue-Base** is as easy as running:

`$ yarn install`

This command will install all the required dependencies and start your development server, which takes care of all the changes you make to your code and runs all the awesome stuff that ends with your code automagically transpiled and running on your browser.

Please note that `yarn install` is only required on your first start, or in case of updated dependencies.


### Initializing development server

  Once all the dependencies are installed, you can run `$ yarn start` to initialize your development server using [webpack-dev-server](https://webpack.github.io/) express middleware.

  The dev server uses  [HMR](https://webpack.github.io/docs/hot-module-replacement.html) (Hot module replacement) that injects updated modules into the bundle in runtime. It's like LiveReload


## Architecture

Vue-base is based on [Redux](http://redux.js.org/) paradigm so you can find all the typical entities of an Redux project like [reducers](http://redux.js.org/docs/basics/Reducers.html) , [store](http://redux.js.org/docs/basics/Store.html), [actions](http://redux.js.org/docs/basics/Actions.html) , etc.

There are four main folders:

* `server` contains Vue-Base development & production server based in express with Universal/Isomorphic support and custom middlewares like Gzip.

```javascript
server
  api/ //Api mocks
  lib/ //Universal rendering files
  middleware/ //enviroment middleware
  statics/ //definition of  statics path
  templates/ //universal templates
    server  //Server  
    routing  //Routing middleware  
```

* `webpack` contains Vue-Base Webpack configuration separated by enviroment that allows to use different plugins and loaders in each target enviroment.

```javascript
webpack
  webpack.common.config/ //Common config
  webpack.dev.config/ //Development config
  webpack.prod.config/ //Production config
  webpack.test.config/ //Testing config
  webpack.dll.config/ //Dll config
```

* `src/base/` contains Vue-Base platform bootstrapping code.

```javascript
base
  client/ //client bootstrap
  conf/ //Configuration files and Yeoman templates
  reducers/  //reducer index
  routes/ //routes index
  shared/ // shared base folder
    regenerators/ //index regenerators
    CreateReducer //Custom reducer creator
    ENV //Env handler
    Errors //Errors handler
    FetchData //Isomorfic data handler
    FileSystem //Filesystem manager
    JsDomSetup //JsDom Configuration FileSystem
    Regenerate // Regenerate indexes
  store/ //Store configuration
  types/ //Action request Types
  wp-plugins/ //Custom webpack plugins
  ...
```

* `src/app/` is the place where to put your application source code.

Vue-Base uses a "featured based" distribution, so all the necessary code for each page/features is located in its own folder inside containers folder as in `src/app/containers/myContainer`

A container is a Vue component who contains other components, Redux entities, functions and store subscriptions. Each container is self-contained and represents a feature like "clients" or "products" and it contains all the necessary stuff.
```javascript
app/
  containers/
    myContainer/
      actionTypes/ //action types definition
      actions/ //action creators
      components/ //container components
      getters/  //container getters
      mutations/ //containers mutations
      reducers/ //container reducers
      services/ //container services
      myContainer.container.vue //container component
  ...
```

## Action Types
ActionTypes it's a representation using constants of your possible actions:

```javascript
const WeatherActionTypes = {
  SET_STATION: 'SET_STATION',
}

export default WeatherActionTypes
```

## Actions
Actions are payloads of information witch represent that something happend in your application and  send data from your application to your store:

```javascript
import WeatherActionTypes from '../action-types'
import { services } from '../services'

export const actions = {

  getStations ({ commit }) {
    services.getStations()
      .then(stations => commit(
          WeatherActionTypes.SET_STATION, 
          stations && stations.list))
  }

}

```

The request middleware will resolve the request param 
 and dispatch a new action with "ACTION_SUCCESS" or "ACTION_ERROR" with the response of the request in the payload. 

## Reducers
Reducers describe how the state of your application changes in response to a new Action. Vue-Base uses a custom CreateReducer that allows to use separated reducers functions instead of "switch based" reducers.

```javascript
import { getters } from '../getters'
import { actions } from '../actions'
import { mutations } from '../mutations'

const state = {
  stations: [],
  forecasts: [],
}

export default {
  state,
  getters,
  actions,
  mutations
}

```

## Distribution

You can generate a complete distribution source ready for production enviroments.

### Building your production application

`$ yarn build:prod` will create a minified version for your application, ready for production.

### Running production server

`$ yarn start:prod` will run production enviroment of your application serving content from dist directory.


## Testing your application

You can write your tests normally using Mocha and Chai for assertions.

### Running your tests

`$ yarn test` will perform your unit testing, or `yarn test:coverage` to run your tests and display a code coverage report.

### Generating code coverage

Vue base uses [Nyc](https://github.com/bcoe/nyc) for code coverage and you can generate reports in console or icov/html format.

`$ yarn test` will perform your code coverage, generating an html report located in coverage/ folder.

## Contributing

Anyone and everyone is welcome to contribute, however, if you decide to get involved, please take a moment to review the [guidelines](CONTRIBUTING.md):

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## License

**Vue-Base** is available under the [MIT license](LICENSE).
