import React from "react";
import Club from "./MyComponents/Club_routing";
import Xenium_final from "./Xenium/Xenium_final";
import Nav from "./Home/navbar";
import Form from "./Form/Form";
// import "./App.css";
import Home from "./Home/Home";
import { Route, Link, BrowserRouter } from "react-router-dom";
import { Switch, useLocation } from "react-router-dom";
import Club_routing from "./MyComponents/Club_routing";
// import data from "./MyComponents/data.json";

function App() {
  return (
    <Club_routing/>
    // <div>
    //   <BrowserRouter>
    //     <Nav />
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route exact path="/form">
    //         < Form/>
    //       </Route>
    //       <Route exact path="/xenium">
    //         <Xenium_final />
    //       </Route>
    //       <Route path="/clubs">
    //         <Club />
    //       </Route>
    //     </Switch>
    //   </BrowserRouter>
    // </div>
    );
}

export default App;