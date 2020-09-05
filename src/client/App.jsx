import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './routes/home';
import { SignIn } from './routes/sign-in';
import { Error } from './routes/error';
import { Header } from './components/header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
