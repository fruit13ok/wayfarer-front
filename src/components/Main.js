import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Cities from './Cities'
import Profiles from './Profiles'
import LoginModalContainer from './LoginModalContainer'


class  Main extends Component {
  render() {
    // console.log('MAIN')
    // console.log('state:', this.props.isLoggedIn)
    return (
      <div>
        <Switch>
          <Route path = "/cities" component={Cities} />
          <Route path = "/profile/:name" render={(props) => <Profiles {...props} isLoggedIn={this.props.isLoggedIn}/>} />
          <Route path = "/" component={Landing} />
        </Switch>
        </div>
    );
  }
}

export default Main;
