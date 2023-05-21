import { NavLink } from "react-router-dom";
let Header = () => {
  return (
    <div>
      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          end
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to={"/home"}
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to={"/home/5"}
        >
          Musicion Details
        </NavLink>
      </li>

      <li>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to={"/jhghj"}
        >
          Error
        </NavLink>
      </li>
    </div>
  );
};
export default Header;
