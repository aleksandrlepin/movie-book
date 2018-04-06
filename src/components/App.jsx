import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import WatchList from './WatchList';

const App = props => (
  <div >
    <Header {...props} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/watch-list" component={WatchList} />
      <Route render={() => <h2>404 not found!!! sorry</h2>} />
    </Switch>
  </div>
);

App.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default App;
