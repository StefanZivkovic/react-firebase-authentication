import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <div>
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
      <li>
        <Link data-testid="home" to={ROUTES.HOME}>
          Home
        </Link>
      </li>
      <li>
        <Link data-testid="account" to={ROUTES.ACCOUNT}>
          Account
        </Link>
      </li>
      <li>
        <Link data-testid="admin" to={ROUTES.ADMIN}>
          Admin
        </Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
