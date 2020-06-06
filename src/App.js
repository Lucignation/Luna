import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Home from './containers/Home';
import Tour from './containers/tour/Tour';
import Music from './containers/music/Music';

import Gallery from './containers/gallery/Gallery';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  const date = new Date().getFullYear();
  return (
    < div className="App">
      <Router>
        <Fragment>
            <Route component={Navigation} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route exact path="/music" component={Music} />
              <Route exact path="/photos" component={Gallery} />
              <Route exact path="/tour" component={Tour} />
            </Switch>
            <p className="footer">Don Casino &copy; {date} - all rights reserved</p>
          </Fragment>
      </Router>
    </div>
  );
}

export default App;
