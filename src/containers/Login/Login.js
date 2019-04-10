import React, { Component } from "react";
//import Panel from "../../components/Panel/Panel";
import { Link } from "react-router-dom";

import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div>
        {user ? <p>Hola, {user.displayName}</p> : <p>Inicie sesión.</p>}

        {user ? (
          <button className="b1" onClick={signOut}>
            Cerrar sesión
          </button>
        ) : (
          <button className="b2" onClick={signInWithGoogle}>
            Ingresa con Google
          </button>
        )}
        <Link to="panel">
          <p>Panel</p>
        </Link>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
