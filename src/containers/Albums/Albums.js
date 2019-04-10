import React, { Component } from "react";
import axios from "axios";
import "../Albums/ALbums.css";

class Albums extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums() {
    axios.get("https://jsonplaceholder.typicode.com/albums").then(response => {
      console.log(response);
      this.setState({ albums: response.data });
    });
  }

  render() {
    return (
      <div className="containerAlbums">
        <ul className="AlbumsCss">
          {this.state.albums.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Albums;
