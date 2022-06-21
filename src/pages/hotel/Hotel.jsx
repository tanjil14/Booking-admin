import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";
import "./hotel.scss";
const Hotel = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { data } = useFetch(`/hotels/find/${path}`);
  return (
    <div className="sHotel">
      <Sidebar />
      <div className="sHotelContainer">
        <Navbar />
        <div className="hotelDetail">
          <div className="top">
            <h3>Hotel Images</h3>
            <Card sx={{ maxWidth: 350 }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="http://res.cloudinary.com/dqo2uejpy/image/upload/v1655641916/upload/ttwdiu5n6yva65cg5j3y.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
                <button className="deleteButton">Delete</button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
