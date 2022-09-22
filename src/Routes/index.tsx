import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Redirect, Switch } from "react-router-dom";
import { AboutUs } from "../Pages/AboutUs";
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
      <AnimatePresence>
        <Box
          gridArea="main"
          as={motion.div}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <Route component={Login} exact path="/" />
          <Route component={Register} path="/register" />
          <Route component={FitnessHome} path="/fitnessHome" isPrivate />
          <Route component={Nutrition} path="/nutrition" isPrivate />
          <Route component={Training} exact path="/training" isPrivate />
          <Route
            component={Exercise}
            path="/training/:exerciseName"
            isPrivate
          />
          <Route component={AboutUs} path="/aboutUs" isPrivate />
          <Route component={() => <Redirect to="/" />} path="/*" />
        </Box>
      </AnimatePresence>
    </Switch>
  );
};
