import React, {useContext} from "react";
import {AuthContext} from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const {googleSignIn} = useContext(AuthContext);
  const hanndleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={hanndleGoogleSignIn}
          className="btn btn-circle btn-outline">
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
