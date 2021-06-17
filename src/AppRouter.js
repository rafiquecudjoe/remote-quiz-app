import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login"
import "./App.css";
import Layout from "./pages/dashboard/Layout";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Layout} />
      <Route exact path='/' component={Login}/>
    </Switch>
  );
};

export default AppRouter;
