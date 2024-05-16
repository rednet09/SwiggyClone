import { LOGO_URL } from "../Utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const status = useOnlineStatus();
  return (
    <header className="flex justify-between p-6 border-2 border-black mt-4 mx-2">
      <div className="w-24 rounded-sm">
        <img className="rounded-3xl" src={LOGO_URL}></img>
      </div>

      <nav className="flex justify-between">
        <ul className="flex justify-between gap-10 items-center">
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
