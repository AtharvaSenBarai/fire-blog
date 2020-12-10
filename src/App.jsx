import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContextProvider from './Context';
import Header from './organisms/Header';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:slug" component={PostDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={Create} />
          <Route path="/edit/:slug" component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
