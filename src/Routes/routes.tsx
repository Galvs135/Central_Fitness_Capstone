import { ComponentType } from "react";
import {
  Route as CommomRoute,
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
    <CommomRoute
      {...rest}
      render={() => {
        return isPrivate ? "/" : <Component />;
      }}
    />
  );
};
