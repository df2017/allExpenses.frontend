import React from "react";
import {GoogleLogin} from "react-google-login";
import { useMutation } from "@apollo/client";
import AUTH_GOOGLE from "../../querys/verifyAuthGoogle-query";
import { Redirect, useHistory } from "react-router-dom";


function AuthGoogleLoginService() {
  const history = useHistory();
  const provider = process.env.REACT_APP_AUTH_PROVIDER_GOOGLE;
  const [addTodo] = useMutation(AUTH_GOOGLE);

  const googleResponse = async (resp) => {
    const token = resp.accessToken;
    localStorage.setItem("accessToken", token);

    const result = await addTodo({
      variables: { provider: provider, accessToken: token },
    });
    console.log(result);
    history.push("/dashboard");
    return <Redirect to="/dashboard" />;
  };

  return (
   
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        render={(renderProps) => (
          <button
            className="button is-black is-fullwidth"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Login with GOOGLE
          </button>
        )}
        onSuccess={googleResponse}
        onFailure={googleResponse}
      />
 
  );
}
export default AuthGoogleLoginService;
