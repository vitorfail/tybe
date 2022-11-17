import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RoutesPrivate from "./RotaPrivada";

const Rout = () => (
    <BrowserRouter>
        <Switch>
          <RoutesPrivate exact path="/" component={Home} ></RoutesPrivate>
          <Route  exact path="/login" component={Login}/>
        </Switch>
    </ BrowserRouter>
  );
  export default Rout;