import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login"
import "./App.css";
import Layout from "./pages/dashboard/Layout";
import dashHome from "./pages/dashHome"
import Questionare from "./pages/Questionare";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Layout} />
      <Route exact path='/' component={Login} />
      <Route exact path='/dash' component={dashHome} />
      <Route exact path='/quest' component={Questionare}/>
    </Switch>
  );
};

export default AppRouter;
