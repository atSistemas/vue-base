import { renderer } from './renderer'

export default function renderContainer (renderer, store, context) {
  return renderer.renderToString(context, (err, html) => {
    if (err) {
      return handleError(err)
    }
  })
}

// import React from 'react';
// import { Provider } from 'react-redux';
// import { RouterContext } from 'react-router';
// import { renderToString } from 'react-dom/server';

// export default function renderContainer(store, renderProps) {

//   return renderToString(

//     <Provider store={ store }>
//       <RouterContext { ...renderProps } />
//     </Provider>
//   );
// }