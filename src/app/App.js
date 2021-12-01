import React from "react";
import { Route, Switch } from "react-router-dom";
import RoutingLogin from "./components/routingLogin";
import RoutingMain from "./components/routingMain";
import RoutingNavbar from "./components/routingNavbar";
import RoutingUsers from "./components/routingUsers";

function App() {
    return (<div>
        <RoutingNavbar />
        <Switch>
        <Route path='/main' component={RoutingMain} />
        <Route path='/login' component={RoutingLogin} />
        <Route path='/users/:userId?'component={RoutingUsers} />
        </Switch>
        </div>
    );
}
export default App;
