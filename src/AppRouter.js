import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login"
import "./App.css";
import Layout from "./pages/dashboard/Layout";
import dashHome from "./pages/dashHome"
import Questionare from "./pages/Questionare";
import Signup from "./pages/Signup"


const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Layout} />
      <Route exact path='/' component={Login} />
      <Route exact path='/dash' component={Layout} />
      <Route exact path='/dashboard/createaquiz' component={Layout} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/dashboard/classes" component={Layout} />
      <Route exact path="/dashboard/takeaquiz" component={Layout} />
      <Route exact path="/dashboard/help" component={Layout} />
      <Route exact path="/dashboard/settings" component={Layout}/>
      
   </Switch>
  );
};

export default AppRouter;
