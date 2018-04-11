// import { applyMiddleware, createStore } from 'redux'
// import reduxReqMiddleware from 'redux-req-middleware'
// import rootReducer from '../../src/base/reducers/'
import { createStore } from '../../src/base/store'

export default function configureServerStore () {
  // const configureStore = applyMiddleware(reduxReqMiddleware())(createStore)

  // return configureStore(rootReducer)
  return createStore()
}

// import { applyMiddleware, createStore } from 'redux';
// import reduxReqMiddleware from 'redux-req-middleware';
// import rootReducer from '../../src/base/reducers/';

// export default function configureServerStore() {
//   const configureStore = applyMiddleware(reduxReqMiddleware())(createStore);
//   return configureStore(rootReducer);
// }
