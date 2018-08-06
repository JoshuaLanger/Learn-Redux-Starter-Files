import React from 'react';

import { render } from 'react-dom';

import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Import css
import css from './styles/style.styl';

// Import React Router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
