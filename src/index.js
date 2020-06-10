import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WebFont from 'webfontloader';

import Home from './components/Home';
import FirstTab from './components/FirstTab';
import SecondTab from './components/SecondTab';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';


WebFont.load({
  google: {
    families: ['Karla', 'Lato', 'Open Sans', 'Roboto', 'sans-serif'],
  },
});



const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/firstTab" exact component={FirstTab} />
        <Route path="/secondtab" exact component={SecondTab} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
render(<Root />, document.querySelector('#root'));
registerServiceWorker();
