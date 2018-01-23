import base from 'base';
import getScripts from '../lib/GetScripts';

export default function renderPage() {

  const app = getScripts('app');
  const vendor = getScripts('vendor');
  const style = (base.env === 'production') ? '<link rel="stylesheet" href="bundle.css">' : '';

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <title>Vue Base</title>
      <base href="/">
      ${ style }
      ${ vendor }
    </head>
    <body>
    <div id="app">
    </div>
    ${ app }
    </body>
  </html>
  `;

}