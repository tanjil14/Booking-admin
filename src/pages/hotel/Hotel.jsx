import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";
import "./hotel.scss";
const Hotel = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { data, loading } = useFetch(`/hotels/find/${path}`);
  const { photos } = data;

  return (
    <div className="sHotel">
      <Sidebar />
      <div className="sHotelContainer">
        <Navbar />
        <div className="hotelDetail">
          <div className="top">
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{ fontWeight: 600, fontSize: "20px" }}
                    variant="h5"
                    component="div"
                  >
                    <span className="hTitle">Name:</span>
                    {data.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="hTitle">Title:</span>
                    {data.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="hTitle">Type:</span>
                    {data.type}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="hTitle">City:</span>
                    {data.city}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="hTitle">Address:</span>
                    {data.address}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="hTitle">Description:</span>
                    {data.desc}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="hTitle">Price</span>
                    {data.cheapestPrice}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="hTitle">Distance</span>
                    {data.distance}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="center">
            <h3>Hotel Images</h3>
            <div className="centerImg">
              {loading
                ? "Loading"
                : photos &&
                  photos?.map((photo) => (
                    <Card
                      sx={{ maxWidth: 350 }}
                      className="card"
                      key={photo._id}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="300"
                          image={photo}
                          alt="photo"
                          className="cardIng"
                        />
                      </CardActionArea>
                      {/* <button onClick={handleClick} className="deleteButton">Delete</button> */}
                    </Card>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
