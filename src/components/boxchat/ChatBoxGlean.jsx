import "./boxchat.css";
import Popup from "../popup/Popup";
import Aspect from "../../assets/img/icon/aspect_ratio.png";
import Remove from "../../assets/img/icon/remove.png";
import Mic from "../../assets/img/icon/mic.png";
import AttachFile from "../../assets/img/icon/attach_file.png";
import Send from "../../assets/img/icon/near_me.png";

export default function ChatBoxGlean({ isBoxShow }) {
  return (
    <div className="boxchat-container">
      <div className="boxchat-popup">
        <Popup />
      </div>
      <div className="boxchat-content">
        <div className="boxchat-content_top">
          <div className="boxchat-aspect">
            <img src={Aspect} alt="" />
          </div>
          <div className="boxchat-remove" onClick={() => isBoxShow()}>
            <img src={Remove} alt="" />
          </div>
        </div>
        <div className="boxchat-content_bottom">
          <div className="boxchat-content_bottom_respond" />
          <div className="boxchat-content_bottom_input">
            <input placeholder="Nhập tin nhắn" />
            <div className="boxchat-content_icon">
              <img src={Mic} />
              <img src={AttachFile} />
              <img src={Send} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
