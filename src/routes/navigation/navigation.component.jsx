import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="links">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
