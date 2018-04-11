// import topBar from './components/topBar/topBar.component.vue'
export default ({
  name: 'App',
  // components: {
  //   topBar
  // },
  render (h) {
    return (
      <div id="app">
 
        <router-view/>
      </div>
    )
  }
})
