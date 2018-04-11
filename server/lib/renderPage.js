import * as templates from '../templates/'

export default function renderPage (routeMatch) {
  const template = templates[routeMatch.substring(1)]

  if (routeMatch === '/' || !template) return templates.main()
  else return template()
}
