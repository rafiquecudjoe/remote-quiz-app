import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login"
import "./App.css";
import Layout from "./pages/dashboard/Layout";
import dashHome from "./pages/dashHome"

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Layout} />
      <Route exact path='/' component={Login} />
      <Route exact path='/dash' component={dashHome}/>
    </Switch>
  );
};

export default AppRouter;
