import "./home.css";
import Boxchat from "../../components/boxchat/Boxchat";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return <div className="home-container">
      <div className="home-sidebar">
        <Sidebar />
      </div>
      <div className="home-content">
        <div className="home-content_search">
          <input placeholder="Tìm kiếm" />
        </div>
        <div className="home-content_highlight">
          <ul className="list-highlight_list">
            <li className="highlight-item">
              <img src="" />
              <a href="#">Bộ TTTT....</a>
            </li>
            <li className="highlight-item">
              <img src="" />
              <a href="#">BHSoft....</a>
            </li>
            <li className="highlight-item">
              <img src="" />
              <a href="#">Nghị định ...</a>
            </li>
            <li className="highlight-item">
              <img src="" />
              <a href="#">Kenh14....</a>
            </li>
            <li className="highlight-item">
              <img src="" />
              <a href="#">Thông tư....</a>
            </li>
            <li className="highlight-item">
              <img src="" />
              <a href="#">Nghị định ...</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-box-chat">
        <Boxchat />
      </div>
    </div>;
}
