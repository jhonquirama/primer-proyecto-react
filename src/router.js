import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Panel from "./components/Panel/Panel";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Login from "./containers/Login/Login";
import FooterPage from "./components/FooterPage/FooterPage";
import Posts from "./containers/Posts/Posts";
import Albums from "./containers/Albums/Albums";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/panel" component={Panel} />
      <Route path="/posts" component={Posts} />
      <Route path="/albums" component={Albums} />
      <Route path="/footerpage" component={FooterPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Router;
