import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContextProvider from './Context';
import Header from './organisms/Header';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:slug" component={PostDetails} />
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
