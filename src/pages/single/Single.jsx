
import { useLocation, useNavigate } from "react-router-dom";
import Chart from "../../components/chart/Chart.jsx";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import useFetch from "../../hooks/useFetch.js";
import "./single.scss";
const Single = () => {
  // const [user, setUsers] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { data } = useFetch(`/users/${path}`);
  const navigate=useNavigate()
  const handleClick = () => {
    navigate(`/users/update/${path}`)
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <div className="top">
          <div className="left">
            <div className="editButton" onClick={handleClick}>
              Edit 
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={
                  (data && data.img) ||
                  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {`${data.city} , ${data.country}`}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{data.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
