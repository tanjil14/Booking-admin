import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SuccessModal from "../../components/successModal/SuccessModal";
import "./new.scss";
const New = ({ inputData, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const validation = () => {
    const errors = {};
    if (!file) {
      errors.file = "File Error";
    }
    if (!info.username) {
      errors.username = "Username Error";
    }
    if (!info.email) {
      errors.email = "Email Error";
    }
    if (!info.phone) {
      errors.phone = "Phone Error";
    }
    if (!info.password) {
      errors.password = "Password Error";
    }
    if (!info.country) {
      errors.country = "country Error";
    }
    if (!info.city) {
      errors.city = "city Error";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };
  const handleClick = async (e) => {
    const { isValid } = validation();
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "booking-app");

    try {
      if (isValid) {
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
        setOpenModal(true);
      } else {
        setError(true);
        setOpenModal(true);
      }
    } catch (err) {
      setError(true);
      setOpenModal(true);
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
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
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
              {inputData.map((data) => (
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

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
      {openModal && (
        <SuccessModal
          url={"/users"}
          title={
            error
              ? "Something went wrong!Please fill all field."
              : "User has been create successfully!"
          }
          open={openModal}
          setOpen={setOpenModal}
        />
      )}
    </div>
  );
};

export default New;
