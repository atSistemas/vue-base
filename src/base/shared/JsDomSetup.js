// const { JSDOM } = require('jsdom')

// let exposedProperties = ['window', 'navigator', 'document']

// global.document = new JSDOM('<!doctype html><html><body></body></html>');
// global.window = document.defaultView
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property)
//     global[property] = document.defaultView[property]
//   }
// })

// global.navigator = {
//   userAgent: 'node.js'
// }

// process.on('unhandledRejection', () => {

// })

const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js'
}

const props = Object.getOwnPropertyNames(window)
  .filter(prop => typeof global[prop] === 'undefined')
  .reduce((result, prop) => ({
    ...result,
    [prop]: Object.getOwnPropertyDescriptor(window, prop),
  }), {})

Object.defineProperties(global, props)

export default global
