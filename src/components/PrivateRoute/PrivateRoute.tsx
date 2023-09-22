import React, { useState, useEffect } from "react";
import {
  Navigate,
  Outlet,
  Route,
  RouteProps,
  useLocation,
} from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

type privateRouteProps = RouteProps;

const PrivateRoute = ({ Component }: { Component: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();
  // const Component: JSX.Element = component;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if (user.token.length === 0) {
  //   // Redirect to the sign-in page if the user is not authenticated
  //   return <Navigate to="/sign-in" />;
  // }

  // // If authenticated, render the specified route
  // return <Route {...rest} />;

  // const auth = false; //your logic

  return user.isAuth ? (
    // @ts-ignore

    <Component />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
};
export default PrivateRoute;

{
  /* <>{isLoggedIn ? { children } : <Navigate to="/sign-in" />} */
}
