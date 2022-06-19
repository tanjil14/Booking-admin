import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./sidebar.scss";
import SidebarCenterList from "./sidebarCenterList/SidebarCenterList.jsx";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">tanjiladmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <SidebarCenterList />
      </div>
      <div className="bottom">
        <div
          onClick={() => dispatch({ type: "LIGHT" })}
          className="colorOption"
        ></div>
        <div
          onClick={() => dispatch({ type: "DARK" })}
          className="colorOption"
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
