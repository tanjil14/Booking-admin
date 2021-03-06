import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { roomInputs } from "../../formData";
import useFetch from "../../hooks/useFetch";
import "./newRoom.scss";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  const [errors, SetErrors] = useState({});
  const { data, loading } = useFetch("/hotels");
  const validation = () => {
    const errors = {};
    if (!hotelId) {
      errors.hotelId = "Please Select A Hotel";
    }
    if (!rooms.length) {
      errors.rooms = "Please Provide Room Numbers";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };
  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, isValid } = validation();
    try {
      //send to db
      if (isValid) {
        const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
        await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
        setInfo((e) => ([e.target.id] = ""));
      } else {
        SetErrors(errors);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((data, index) => (
                <div className="formInput" key={data.id}>
                  <label htmlFor={data.id}>{data.label}</label>
                  <input
                    onChange={handleChange}
                    type={data.type}
                    placeholder={data.placeholder}
                    id={data.id}
                  />
                </div>
              ))}
              <div className="formInput">
                <label htmlFor="rooms">Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  name=""
                  id="rooms"
                  placeholder="Give comma between room numbers"
                />{" "}
                <br />
                {errors && <span className="error">{errors.rooms}</span>}
              </div>
              <div className="formInput">
                <label htmlFor="hotelId">Choose A Hotel</label>
                <select
                  name=""
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name}
                        </option>
                      ))}
                </select>
                <br />
                {errors && <span className="error">{errors.hotelId}</span>}
              </div>

              <button type="button" onClick={handleSubmit}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
