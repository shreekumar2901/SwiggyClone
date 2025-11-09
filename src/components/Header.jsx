import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-3 px-7 bg-white border border-gray-200 rounded-b-2xl rounded-t-none shadow-lg">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img className="w-24 drop-shadow-logo" src={LOGO_URL} alt="logo" />
        </div>
      </Link>
      <ul className="list-none flex ml-auto  gap-[18px] items-center p-0 nav-items">
        <li className="nav-items-li">
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li className="nav-items-li">
          <Link className="nav-item" to="/about">
            About
          </Link>
        </li>
        <li className="nav-items-li">
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-items-li">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
