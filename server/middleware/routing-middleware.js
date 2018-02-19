import * as express from 'express';

import { console } from 'base';
import renderPage from '../templates/';

export default function applyServerRouting(app) {

  const page = renderPage();
  app.use((req, res, next) => {
    res.status(200).send(page);
    return;
  });

  console.success(`Routing up`);
}