import { Switch } from "react-router-dom";
import { Exercise } from "../Pages/Exercise";
import { FitnessHome } from "../Pages/Fitness";
import { Login } from "../Pages/Login";
import { Nutrition } from "../Pages/Nutrition";
import { Register } from "../Pages/Register";
import { Training } from "../Pages/Training";
import { Route } from "./routes";

export const RoutesApplication = () => {
  return (
    <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Register} path="/register" />
      <Route component={FitnessHome} path="/fitnessHome" />
      <Route component={Nutrition} path="/nutrition" />
      <Route component={Training} exact path="/training" />
      <Route component={Exercise} path="/training/:exerciseName" />
    </Switch>
  );
};
