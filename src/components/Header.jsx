import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
      </Link>
      <ul className="nav-items">
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
