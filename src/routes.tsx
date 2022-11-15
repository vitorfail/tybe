import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";

const Rout = () => (
    <BrowserRouter>
        <Switch>
          <Route  exact path="/" component={Home}/>
        </Switch>
    </ BrowserRouter>
  );
  export default Rout;