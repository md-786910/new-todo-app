import React from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Home() {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // sign with google
  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        const resp = response.user;
        // console.log(resp);

        if (resp.emailVerified) {
          navigate("/addTodo");
        } else {
          return;
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (data) => {
  //     console.log(data);
  //   });
  // }, []);

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
