import React, { FC } from 'react';
import routes from 'routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css';
import 'assets/css/custom.css';
import Error404 from 'pages/Error404';
import Home from 'pages/Home';
import Favourite from 'pages/Favourite';
interface RouteTypes {
  path: string,
  page: FC,
}

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* {routes.map((route: RouteTypes) => <Route exact path={route.path} component={route.page} key={route.path} />)} */}
          <Route exact path={'/'} component={Home} />
          <Route path={'/favourite'} component={Favourite} />
          <Route path="/*" component={Error404} />
        </Switch>
      </Router>
    </>
  )
}
