import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './css/main.css';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//TODO: check that css does propagate in all components

//Wrap your application with `<BrowserRouter>` component = routing in React app to any nested components.
//uses the history API(pushState, replaceState, and the popstate event) + creates a browser history.
//`<Route>` and `<Link>` components define the routes & create links to navigate between these routes.