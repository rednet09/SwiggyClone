import { LOGO_URL } from "../Utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const status = useOnlineStatus();
  return (
    <header className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <nav className="nav-bar">
        <ul>
          <li>Online Status : {status ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
