import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { mode, toggleMode } = props;
  return (
    <>
      <nav className={`navbar bg-${mode === "light" ? "light" : "darkGray"}`}>
        <h2 className={`logo text-${mode === "light" ? "primary" : "light"}`}>
          TextUtils
        </h2>
        <ul className="navItems">
          <li className="listItem">
            <NavLink
              className={`navLink text-${
                mode === "light" ? "primary" : "light"
              }`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="listItem">
            <NavLink
              className={`navLink text-${
                mode === "light" ? "primary" : "light"
              }`}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <div
            className={`switch bg-${mode === "light" ? "primary" : "white"}`}
          >
            <input type="checkbox" onClick={toggleMode} />
            <div>
              {mode === "light" ? (
                <i className="fa-solid fa-moon text-secondary"></i>
              ) : (
                <i className="fa-regular fa-sun"></i>
              )}
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
