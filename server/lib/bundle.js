import fs from 'fs'
import path from 'path'

export default () => JSON.parse(fs.readFileSync(path.join('./dist/', 'vue-ssr-server-bundle.json'), 'utf-8'))
