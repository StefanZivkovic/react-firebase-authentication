import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <ul>
    <li>
      <Link data-testid="landing" to={ROUTES.LANDING}>
        Landing
      </Link>
    </li>
    <li>
      <Link data-testid="home" to={ROUTES.HOME}>
        Home
      </Link>
    </li>
    <li>
      <Link data-testid="account" to={ROUTES.ACCOUNT}>
        Account
      </Link>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link data-testid="signin" to={ROUTES.SIGN_IN}>
        Sign In
      </Link>
    </li>
    <li>
      <Link data-testid="landing" to={ROUTES.LANDING}>
        Landing
      </Link>
    </li>
  </ul>
);

export default Navigation;
