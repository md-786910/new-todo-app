import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Home() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // sign with google
  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        const resp = response.user;
        console.log(resp);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="googleContainer fluid-container">
        <button
          type="button"
          className="googleBtn btn btn-primary btn-sm"
          onClick={() => signWithGoogle()}
        >
          <div className="content">
            <img className="googleImage" src="./icon/google.png" alt="logo" />
            <h4>sign with Google</h4>
          </div>
        </button>
      </div>
    </>
  );
}

export default Home;
