import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch} from "react-router-dom";
import DashboardPage from "../components/DashboardPage";

import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history=createHistory();
export default class ExpensifyAppRouters extends Component {
  render() {
    return (
        <Router history={history}>
          <div>
         
        <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/> 
     
        <PrivateRoute path="/dashboard" component={DashboardPage}/> 
      
        <Route  component={NotFoundPage}/>
        </Switch>
        </div>
        </Router>
    )
  }
}

   /* instead of using normal route, we use private route component that will render component based on the authentication */

    