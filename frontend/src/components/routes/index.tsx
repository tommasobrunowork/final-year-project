import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { LoginPage, HomePage, ProfilePage } from "../../pages";
import { useAuth } from "../../hooks";
import MySchedulePage from "../../pages/my-schedules/my-schedule";
import AdminRoute from "./AdminRoute";
import RequestedHolidays from "../../pages/requested-holidays/requested-holidays";
import UserProfilePage from "../../pages/userProfile/userProfile";

export const Routes = () => {
  const {
    state: { isLoggedIn, user },
  } = useAuth();
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: "/login" }} />
      </Route>
      <PublicRoute exact path="/login" isLoggedIn={isLoggedIn}>
        <LoginPage />
      </PublicRoute>
      <PrivateRoute exact path="/home" isLoggedIn={isLoggedIn}>
        <HomePage />
      </PrivateRoute>
      <PrivateRoute exact path="/profile" isLoggedIn={isLoggedIn}>
        <ProfilePage />
      </PrivateRoute>
      <PrivateRoute exact path="/my-schedules" isLoggedIn={isLoggedIn}>
        <MySchedulePage />
      </PrivateRoute>
      <AdminRoute
        exact
        path="/requested-schedules"
        isLoggedIn={isLoggedIn}
        role={user?.role || "none"}
      >
        <RequestedHolidays />
      </AdminRoute>
      <PrivateRoute exact={false} path="/profile/:id" isLoggedIn={isLoggedIn}>
        <UserProfilePage />
      </PrivateRoute>
    </Switch>
  );
};
