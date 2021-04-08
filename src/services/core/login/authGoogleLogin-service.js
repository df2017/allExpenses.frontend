import React from "react";
import {GoogleLogin} from "react-google-login";
import { useMutation } from "@apollo/client";
import AUTH_GOOGLE from "../../querys/verifyAuthGoogle-query";
import { Redirect, useHistory } from "react-router-dom";


function AuthGoogleLoginService() {
  const history = useHistory();
  const provider = process.env.REACT_APP_AUTH_PROVIDER_GOOGLE;
  const [addTodo] = useMutation(AUTH_GOOGLE);

  const responseSuccess = async (resp) => {
    const token = resp.accessToken;
    if(resp.accessToken){
      localStorage.setItem("accessToken", token);

      const result = await addTodo({
        variables: { provider: provider, accessToken: token },
      });
      history.push("/dashboard");
      return <Redirect to="/dashboard" />;
    }
  };
  const responseFailure = (resp) => {
      console.log(resp)
  }

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
        onSuccess={responseSuccess}
        onFailure={responseFailure}
      />
 
  );
}
export default AuthGoogleLoginService;
