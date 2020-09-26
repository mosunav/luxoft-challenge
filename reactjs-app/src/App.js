import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ListPage } from './components/ListPage/ListPage'
import { DetailsPage } from './components/DetailsPage/DetailsPage'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to="/rentals/camper-vans/" />
        </Route>
        <Route exact path={"/rentals/camper-vans/"}>
          <ListPage />
        </Route>
        <Route exact path={"/rentals/camper-vans/details/:id"}>
          <DetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
