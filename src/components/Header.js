import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
