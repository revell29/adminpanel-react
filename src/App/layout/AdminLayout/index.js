import React, { useEffect, Suspense, useCallback } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Fullscreen from "react-full-screen";
import windowSize from "react-window-size";

import Navigation from "./Navigation";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import Loader from "../Loader";
import routes from "../../router/adminRoute";
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";
import { verifyUser } from "../../../services/auth";
import { actionLogin } from "../../modules/auth/store/actions";

import "./app.scss";

function AdminLayout(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const fullScreenExitHandler = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      dispatch({ type: actionTypes.FULL_SCREEN_EXIT });
    }
  };

  const checkToken = useCallback(() => {
    verifyUser()
      .then((res) => {
        dispatch(actionLogin(res));
        console.log(res.data);
      })
      .catch((err) => {
        if (err.statusCode === 401) {
          history.push("/login");
        }
      });
  }, [dispatch, history]);

  useEffect(() => {
    setTimeout(() => {
      checkToken();
    }, 500);
  }, [checkToken]);

  useEffect(() => {
    setTimeout(() => {
      checkToken();
    }, 900000);
  }, [checkToken]);

  useEffect(() => {
    if (props.windowWidth > 992 && props.windowWidth <= 1024 && props.layout !== "horizontal") {
      dispatch({ type: actionTypes.COLLAPSE_MENU });
    }
  }, [props]);

  const mobileOutClickHandler = () => {
    if (props.windowWidth < 992 && props.collapseMenu) {
      props.onComponentWillMount();
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", fullScreenExitHandler());
    document.addEventListener("webkitfullscreenchange", fullScreenExitHandler());
    document.addEventListener("mozfullscreenchange", fullScreenExitHandler());
    document.addEventListener("MSFullscreenChange", fullScreenExitHandler());
  });

  const Menu = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) => <route.component {...props} />}
      />
    ) : null;
  });

  return (
    <Aux>
      <Fullscreen enabled={props.isFullScreen}>
        <Navigation />
        <NavBar />
        <div className="pcoded-main-container" onClick={() => mobileOutClickHandler()}>
          <div className="pcoded-wrapper">
            <div className="pcoded-content">
              <div className="pcoded-inner-content">
                <Breadcrumb />
                <div className="main-body">
                  <div className="page-wrapper">
                    <Suspense fallback={<Loader />}>
                      <Switch>
                        {localStorage.getItem("token") ? Menu : <Redirect to="/login" />}
                      </Switch>
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fullscreen>
    </Aux>
  );
}

const mapStateToProps = (state) => {
  return {
    defaultPath: state.templateReducer.defaultPath,
    isFullScreen: state.templateReducer.isFullScreen,
    collapseMenu: state.templateReducer.collapseMenu,
    configBlock: state.templateReducer.configBlock,
    layout: state.templateReducer.layout,
  };
};

export default connect(mapStateToProps)(windowSize(AdminLayout));
