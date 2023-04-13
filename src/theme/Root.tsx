import React, { useState } from "react";
// import '../css/login.css';
import { Loading } from "../components/Loading";
import { auth, signInWithGoogle } from "../utils/firebase";
import { getAuth } from "firebase/auth";

// Default implementation, that you can customize
export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  auth.onAuthStateChanged(async function (user) {
    if (user !== null) {
      setUserAuth(user);
    }

    setAuthLoading(false);
  });

  const isAllow = () => {
    return userAuth?.email && userAuth?.email.split("@")[1] === "asii.ro";
  };

  if (authLoading) {
    return (
      <>
        <Loading />
        <div style={{ display: "none" }}>{children}</div>
      </>
    );
  }

  return (
    <React.Fragment>
      {isAllow() ? (
        <>{children}</>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <button
            className="px-4 py-4 text-lg bg-white text-gray-700 border-0 rounded flex items-center gap-4 hover:text-black transition-all hover:bg-gray-200 hover:cursor-pointer"
            onClick={signInWithGoogle}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
              className="h-8"
            />
            Sign in with Google
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
