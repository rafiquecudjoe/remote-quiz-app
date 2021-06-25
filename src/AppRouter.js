import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Layout from "./pages/dashboard/Layout";

import Signup from "./pages/Signup";
import NavbarComp from "./components/appcomponents/NavbarComp";
import Banner from "./pages/Banner";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Layout} />
      <Route exact path="/" component={Banner} />
      <Route exact path="/dash" component={Layout} />
      <Route exact path="/dashboard/createaquiz" component={Layout} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/dashboard/classes" component={Layout} />
      <Route exact path="/dashboard/takeaquiz" component={Layout} />
      <Route exact path="/dashboard/help" component={Layout} />
      <Route exact path="/dashboard/settings" component={Layout} />
      <Route exact path="/nav" component={NavbarComp} />
      <Route exact path="/banner" component={Banner} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default AppRouter;
