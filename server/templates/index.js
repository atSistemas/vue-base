import base from 'base';
import getScripts from '../lib/GetScripts';

export default function renderPage() {

  const app = getScripts('app');
  const vendor = getScripts('vendor');

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <title>Vue Base</title>
      <base href="/">
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