import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";
import "./room.scss";
const Room = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { data, loading } = useFetch(`/rooms/${path}`);
  const { roomNumbers } = data;
  return (
    <div className="sRoom">
      <Sidebar />
      <div className="sRoomContainer">
        <Navbar />
        <div className="roomDetail">
          <div className="top">
            <Card className="card">
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{ fontWeight: 600, fontSize: "20px" }}
                    variant="h5"
                    component="div"
                  >
                    <span className="rTitle">Type:</span>
                    {data.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="rTitle">Price:</span>
                    {data.price}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="rTitle">Max People:</span>
                    {data.maxPeople}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="rTitle">Description:</span>
                    {data.desc}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "18px" }}
                  >
                    <span className="rTitle">Room Numbers:</span>
                    {roomNumbers?.map((room) => (
                      <span key={room._id} className="roomNumber">
                        {room.number}
                        <span className="comma">,</span>
                      </span>
                    ))}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
