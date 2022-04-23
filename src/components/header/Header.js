import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/usefirebase";

function Header() {
  const { user, handleSignOut } = useFirebase();
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.displayName ? (
          <span
            onClick={handleSignOut}
            style={{ color: "red", marginLeft: "10px" }}
          >
            {user.displayName}
          </span>
        ) : (
          <Link to="/signup">SignUp</Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
