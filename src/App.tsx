import React, { FC } from 'react';
import routes from 'routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import 'assets/css/custom.css';
interface RouteTypes {
  path: string,
  page: FC,
}

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route: RouteTypes) => <Route exact path={route.path} component={route.page} key={route.path} />)}
        </Switch>
      </Router>
    </>
  )
}
