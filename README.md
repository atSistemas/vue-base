![Vue-Base logo](./src/app/assets/images/vue-base-logo.png)

# Vue-Base

![Npm-Version](https://img.shields.io/badge/npm-6.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

**A starter kit for VueJs Applications**

This repository is a modular abstraction to build a [VueJS](https://vuejs.org/) web application based on [Redux](https://vuex.vuejs.org/en/intro.html) paradigm using [Vuex](https://vuex.vuejs.org/en/intro.html).
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

## **Vuex**
Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official [devtools extension](https://github.com/vuejs/vue-devtools) to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

![Vuex](https://vuex.vuejs.org/en/images/vuex.png)

Vuex is inspired by Flux, Redux and The Elm Architecture. Unlike the other patterns, Vuex is also a library implementation tailored specifically for Vue.js to take advantage of its granular reactivity system for efficient updates.

### **Vuex Core concepts**
* **State**
* **Getters**
* **Mutations**
* **Actions**
* **Modules**

#### State
Vuex uses a single state tree - that is, this single object contains all your application level state and serves as the "single source of truth". This also means usually you will have only one store for each application. A single state tree makes it straightforward to locate a specific piece of state, and allows us to easily take snapshots of the current app state for debugging purposes.

#### Getters
You can think of them as computed properties for stores. Like computed properties, a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed.

#### Mutations
The only way to actually change state in a Vuex store is by committing a mutation. Vuex mutations are very similar to events: each mutation has a string type and a handler. The handler function is where we perform actual state modifications, and it will receive the state as the first argument:
```javascript
import WeatherActionTypes from '../action-types'

export const mutations = {
  [WeatherActionTypes.SET_STATION] (state, stations) {
    state.stations = stations
  }
}
```
You cannot directly call a mutation handler. Think of it more like event registration: "When a mutation with type increment is triggered, call this handler." To invoke a mutation handler, you need to call store.commit with its type:

```javascript
export const getStations = ({ commit }) => (
  services.getStations()
    .then(stations => 
    commit(WeatherActionTypes.SET_STATION, stations))
)
```

### Actions
Actions are similar to mutations, the differences being that:

* Instead of mutating the state, actions commit mutations.
* Actions can contain arbitrary asynchronous operations.

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

#### Action Types
ActionTypes it's a representation using constants of your possible actions:

```javascript
import { createActionType } from 'base'

export default createActionType([
  'SET_STATION'
])
``` 

### Modules
Modules describe how the state of your application changes in response to a new Action. Modules are similar to reducer concept.

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
## **Vue Tips**
### **Component communication**

* **From parent to child component**
We use props to pass data from parent to child components. Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance.

```javascript
Vue.component('blog-post', {
    props: ['title'],
    ...
})
```
Once a prop is registered, you can pass data to it as a custom attribute, like this:
```html
<blog-post title="Welcome to VueBase"></blog-post>
```
* **From child to parent componentt**
We use events to communicate with our direct parent component. We can use the v-on directive to listen to DOM events and run some JavaScript when they’re triggered. From a child method we can do something like:
```javascript
 this.$emit('myEvent', params)
```
To capture this event, we only have to register v-on directive when we define the child component in the html of our parent component like:
```html
<my-child-component v-on:my-event="doSomething"></my-child-component>
```
**doSomething** can be a method registered on our parent component which can do anything we want to do.



### **Lifecycle**
Vue components have the following methods during his life:
* **beforeCreate()**
* **created()**
* **beforeMount()**
* **mounted()**
* **beforeUpdate()**
* **update()**
* **beforeDestroy()**
* **destroy()**

The next picture, shows a visual representation of this lifecycle methods:
![vue lifecycle](https://vuejs.org/images/lifecycle.png)

### Computed Properties
In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain

avoid
```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```
do
```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```

### **Watchers**
While computed properties are more appropriate in most cases, there are times when a custom watcher is necessary. That’s why Vue provides a more generic way to react to data changes through the watch option. This is most useful when you want to perform asynchronous or expensive operations in response to changing data.

## **Distribution**

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
