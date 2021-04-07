import React from "react";
import AuthGoogleLogoutService from "../../../services/core/login/authGoogleLogout-service";
import { Link } from "react-router-dom";

function MenuNav() {
  return (
    <div className="navbar-end is-align-items-center">
      <Link className="navbar-item" to="/dashboard">
        Dashboard
      </Link>
      <Link className="navbar-item" to="/expenses">
        Expenses
      </Link>
      <Link className="navbar-item" to="/incomes">
        Income
      </Link>
      <hr className="has-background-default mt-1 mb-2" />
      <AuthGoogleLogoutService />
    </div>
  );
}
export default MenuNav;
