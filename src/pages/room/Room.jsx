import "./room.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
const Room = () => {
    return (
        <div className="sRoom">
            <Sidebar/>
            <div className="sRoomContainer">
                <Navbar/>
                <div className="top">
                    
                </div>
            </div>
        </div>
    );
};

export default Room;