import { ComponentType } from "react";
import {
  Route as CommonRoute,
  RouteProps as ReactRouteProps,
} from "react-router-dom";

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Route = ({
  isPrivate,
  component: Component,
  ...rest
}: RouteProps) => {
  return (
    <CommonRoute
      {...rest}
      render={() => {
        return isPrivate ? "/" : <Component />;
      }}
    />
  );
};
