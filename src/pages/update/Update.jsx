import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import InputForm from "../../components/inputForm/InputForm";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";
import "./update.scss";
const Update = ({ inputData, title }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  const { data } = useFetch(`/users/${path}`);
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  console.log(data);
  console.log(info);
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
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dqo2uejpy/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newUser = {
        ...info,
        img: url,
      };
      //send to db
      await axios.post("/auth/register", newUser);
    } catch (err) {
      console.log(err);
    }
  };
  const { img } = data;
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
            <img src={file ? URL.createObjectURL(file) : `${img}`} alt="" />
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
                label="Username"
                type="text"
                placeholder="john_doe"
                value={data.username}
              />
              <InputForm
                id="username"
                label="Username"
                type="text"
                placeholder="john_doe"
                value={data.email}
              />
              <InputForm
                id="username"
                label="Username"
                type="text"
                placeholder="john_doe"
                value={data.phone}
              />
              <InputForm
                id="password"
                label="Password"
                type="password"
                value={data.password}
              />
              <InputForm
                id="username"
                label="Username"
                type="text"
                placeholder="john_doe"
                value={data.country}
              />
              <InputForm
                id="username"
                label="Username"
                type="text"
                placeholder="john_doe"
                value={data.city}
              />

              {/* {inputData.map((data) => (
                <div className="formInput" key={data.id}>
                  <label htmlFor={data.id}>{data.label}</label>
                  <input
                    onChange={handleChange}
                    type={data.type}
                    placeholder={data.placeholder}
                    id={data.id}
                    value=""
                  />
                </div>
              ))} */}

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
