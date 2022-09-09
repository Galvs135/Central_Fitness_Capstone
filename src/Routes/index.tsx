import { Switch } from "react-router-dom";
import { Exercise } from "../Pages/Exercise";
import { FitnessHome } from "../Pages/Fitness";
import { Login } from "../Pages/Login";
import { Nutrition } from "../Pages/Nutrition";
import { Register } from "../Pages/Register/Register";
import { Training } from "../Pages/Training";
import { Route } from "./routes";

export const RoutesApplication = () => {
  return (
    <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Register} path="/register" />
      <Route component={FitnessHome} path="/fitnessHome" isPrivate />
      <Route component={Nutrition} path="/nutrition" isPrivate />
      <Route component={Training} exact path="/training" isPrivate />
      <Route component={Exercise} path="/training/:exerciseName" isPrivate />
    </Switch>
  );
};
