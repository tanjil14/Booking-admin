import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import "./sidebarCenterList.scss";
const SidebarCenterList = () => {
  return (
    <ul>
      <p className="title">MAIN</p>
      <li>
        <DashboardIcon className="icon" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Dashboard</span>
        </Link>
      </li>
      <p className="title">LISTS</p>
      <Link to="/users" style={{ textDecoration: "none" }}>
        <li>
          <PersonOutlineOutlinedIcon className="icon" />
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products" style={{ textDecoration: "none" }}>
        <li>
          <StoreIcon className="icon" />
          <span>Products</span>
        </li>
      </Link>
      <li>
        <CreditCardIcon className="icon" />
        <span>Orders</span>
      </li>
      <li>
        <LocalShippingIcon className="icon" />
        <span>Delivery</span>
      </li>
      <p className="title">USEFULL</p>
      <li>
        <InsertChartIcon className="icon" />
        <span>Stats</span>
      </li>
      <li>
        <NotificationsNoneIcon className="icon" />
        <span>Notifications</span>
      </li>
      <p className="title">SERVICE</p>
      <li>
        <MonitorHeartOutlinedIcon className="icon" />
        <span>System Health</span>
      </li>
      <li>
        <PsychologyOutlinedIcon className="icon" />
        <span>Logs</span>
      </li>
      <li>
        <SettingsApplicationsIcon className="icon" />
        <span>Setting</span>
      </li>
      <p className="title">USER</p>
      <li>
        <AccountCircleOutlinedIcon className="icon" />
        <span>Profile</span>
      </li>
      <li>
        <ExitToAppIcon className="icon" />
        <span>Logout</span>
      </li>
    </ul>
  );
};

export default SidebarCenterList;
