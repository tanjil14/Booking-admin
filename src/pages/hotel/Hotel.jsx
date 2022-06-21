import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./hotel.scss";
const Hotel = () => {
  return (
    <div className="sHotel">
      <Sidebar />
      <div className="sHotelContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Hotel;
