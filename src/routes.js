import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import MainPage from './components/MainPage';
import ImportPage from './components/ImportPage';
import ExportPage from './components/ExportPage';
import DecoPage from './components/DecoPage';
import BlogPage from './components/BlogPage';
import ContactUsPage from './components/ContactUsPage';

export default (
  <Route path="/hortilife" component={App}>
    <IndexRoute component={MainPage}/>
    <Route path="import" component={ImportPage}/>
    <Route path="export" component={ExportPage}/>
    <Route path="deco" component={DecoPage}/>
    <Route path="blog" component={BlogPage}/>
    <Route path="contact" component={ContactUsPage}/>
  </Route>
);