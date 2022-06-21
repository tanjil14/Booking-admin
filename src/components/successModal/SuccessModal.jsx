import { Box, Modal, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./successModal.scss";

const SuccessModal = ({ setOpen, open, title, url }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate(url);
  };
  return (
    <div className="successModal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h1">
            {title}
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            User has updated!
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
};

export default SuccessModal;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "green",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
