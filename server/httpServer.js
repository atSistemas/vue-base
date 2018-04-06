import base from 'base/'

const httpServer = app => {
  app.listen(8000, (err) => {
    if (err) return base.console.error(`${err}`)
    base.console.success(`HTTP Server up on http://localhost:8000`)
  })
}

export default httpServer
