import React from "react";
import "./Panel.css";
//import Albums from "../../components/../containers/Albums/Albums";
//import Posts from "../../components/../containers/Posts/Posts";
import { Link } from "react-router-dom";

const Panel = () => (
  <div className="containerPanel">
    <h1>Panel</h1>
    <Link to="Albums">
      <p>ALBUMS </p>
    </Link>
    <Link to="Posts">
      <p> POSTS</p>
    </Link>
  </div>
);

export default Panel;
