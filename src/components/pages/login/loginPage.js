import React from "react";
import AuthGoogleLoginService from "../../../services/core/login/authGoogleLogin-service";
import LoginForm from "../../templates/loginForm";
import { Link } from "react-router-dom";
import background from "../../../img/expenses.jpg";

const containerStyles = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
};

function LoginPage() {
  return (
    <div style={containerStyles}>
      <div className="container is-centered">
        <div className="column is-4 is-offset-4">
          <div className="notification is-primary has-text-black mt-5">
            <h5 className="title is-5">
              <strong>All Expenses</strong>
            </h5>
          </div>
        </div>
        <div className="column is-4 is-offset-4">
          <div className="box">
            <LoginForm />
            <AuthGoogleLoginService />
          </div>
        </div>
        <div className="column is-4 is-offset-4">
          <div className="box">
            <p className="has-text-black has-text-centered">
              <Link className="button-inv" to="/register">
                Sign Up
              </Link>
              <strong className="p-4">·</strong>
              <a href="../">Forgot Password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
