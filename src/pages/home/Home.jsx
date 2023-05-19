import { useState } from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeContent from "../../components/content/HomeContent";
import HomeChart from "../../components/chart/HomeChart";
import ChatBoxGlean from "../../components/boxchat/ChatBoxGlean";
import ChatBoxGleanImg from "../../components/boxchat/ChatBoxGleanImg";

export default function Home() {
  const [show, setShow] = useState(true);
  const [boxShow, setBoxShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  }

  const handleIsBoxChatShow = () => {
    setBoxShow(!boxShow);
  }

  return (
    <div className="home-container">
        {show ? <>
          <div className="home-sidebar">
            <Sidebar />
          </div>
          <div className="home-content">
            <HomeContent isShow={handleShow}/>
          </div>
        </> : <HomeChart isShow={handleShow}/>}
        <div className="home-box-chat">
          {boxShow ? <ChatBoxGlean isBoxShow={handleIsBoxChatShow}/> : <ChatBoxGleanImg isBoxShow={handleIsBoxChatShow}/>}
        </div>
    </div>
  );
}
