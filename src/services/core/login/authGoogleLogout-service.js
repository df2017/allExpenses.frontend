import { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";

function AuthGoogleLogoutService() {
  const logout = () => {
    localStorage.setItem("accessToken", "");
    return { isSignedIn: false };
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID}
      render={(renderProps) => (
        <Link
          className="button is-danger mr-3 ml-2 is-small is-outlined"
          to="/login"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <span className="icon">
            <i className="fas fa-sign-out-alt is-spaced"></i>
          </span>
          <span>Log Out</span>
        </Link>
      )}
      buttonText="Logout"
      onLogoutSuccess={logout}
      onLogoutFailure={(err) => console.log(err)}
    ></GoogleLogout>
  );
}
export default AuthGoogleLogoutService;
