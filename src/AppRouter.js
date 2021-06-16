import { Switch, Route } from "react-router-dom";

import "./App.css";

import Layout from "./pages/dashboard/Layout";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Layout} />
    </Switch>
  );
};

export default AppRouter;
