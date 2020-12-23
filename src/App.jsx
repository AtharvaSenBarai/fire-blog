import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContextProvider from './Context';
import Header from './components/organisms/Header';
import Create from './components/pages/Create';
import Edit from './components/pages/Edit';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
import PostDetails from './components/pages/PostDetails';
import Footer from './components/molecules/Footer';

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
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
