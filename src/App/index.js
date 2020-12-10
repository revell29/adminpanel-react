import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import Login from "./modules/auth/Login";
import "../../node_modules/font-awesome/scss/font-awesome.scss";

import Loader from "./layout/Loader";
import Aux from "../hoc/_Aux";
import ScrollToTop from "./layout/ScrollToTop";

const AdminLayout = Loadable({
  loader: () => import("./layout/AdminLayout"),
  loading: Loader,
});

const LoginLayout = Loadable({
  loader: () => import("./modules/auth/Login"),
  loading: Loader,
});

function App(props) {
  return (
    <Aux>
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              {!localStorage.getItem("token") ? (
                <Redirect to="/login" />
              ) : (
                <Redirect to="/web-app" />
              )}
            </Route>
            <Route path="/login" component={LoginLayout} />
            <AdminLayout />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Aux>
  );
}

export default App;
