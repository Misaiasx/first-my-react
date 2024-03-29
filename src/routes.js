import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/Home';
import Commands from "./containers/Commands/App";


function Routes(){
     
         return(
               
            <Router>

                   <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/commands" companent={Commands}/>


                   </Switch>




            </Router>
         )


}

export default Routes