import { Link, NavLink } from "react-router-dom";
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/" title="Image from freepnglogos.com">
          <img
            className="app__logo"
            src="https://www.freepnglogos.com/uploads/marvel-logo-png/image-marvel-studios-logo-marvel-database-2.png"
            alt="marvel studios logo"
            width={200}
            height={45}
          />
        </Link>
        <div>Information portal</div>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
              to="/">
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
              to="/comics">
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
