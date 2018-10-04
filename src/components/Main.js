import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Cities from './Cities'
import Profiles from './Profiles'



class  Main extends Component {
  render() {
    return (
        <Switch>
          <Route path = "/cities" component={Cities} />
          <Route path = "/profile" component={Profiles} />
          <Route path = "/" component={Landing} />
        </Switch>
    );
  }
}

export default Main;
