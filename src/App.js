import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import creatorPage from './views/creatorPage';
import listPage from './views/listPage';
import counterPage from './views/counterPage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path={'/'} component={creatorPage}/>
        <Route exact path={'/list'} component={listPage}/>
        <Route exact path={'/counter'} component={counterPage}/>
      </Switch>
    </div>
  );
}

export default App;
