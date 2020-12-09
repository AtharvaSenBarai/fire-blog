import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContextProvider from './Context';
import Header from './organisms/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
