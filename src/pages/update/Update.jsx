import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InputForm from "../../components/inputForm/InputForm";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SuccessModal from "../../components/successModal/SuccessModal";
import "./update.scss";
const Update = ({ title }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({
    username: "",
    email: "",
    city: "",
    phone: "",
    country: "",
    img: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/users/${path}`);
        setInfo(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [path]);
  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "booking-app");

    try {
      //1st create img url
      if (file) {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dqo2uejpy/image/upload",
          data
        );

        const { url } = uploadRes.data;
        console.log(url);
        const newUser = {
          ...info,
          img: url,
        };
        //send to db
        await axios.put(`/users/${path}`, newUser);
      } else {
        await axios.put(`/users/${path}`, info);
      }
      setOpenModal(true);
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
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : info.img} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <InputForm
                id="username"
                label="User name"
                type="text"
                value={info.username}
                onChange={handleChange}
              />
              <InputForm
                id="email"
                label="Email"
                type="email"
                value={info.email}
                onChange={handleChange}
              />
              <InputForm
                id="phone"
                label="Phone"
                type="text"
                value={info.phone}
                onChange={handleChange}
              />
              <InputForm
                id="city"
                label="City"
                type="text"
                value={info.city}
                onChange={handleChange}
              />
              <InputForm
                id="country"
                label="Country"
                type="text"
                value={info.country}
                onChange={handleChange}
              />
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
      {openModal && <SuccessModal url={"/users"} title="User has been updated successfully!" open={openModal} setOpen={setOpenModal} />}
    </div>
  );
};

export default Update;
