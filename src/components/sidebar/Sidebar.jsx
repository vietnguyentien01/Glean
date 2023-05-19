import { useState } from "react";
import "./sidebar.css";
import MoreVert from "../../assets/img/icon/more_vert.png";
import Add from "../../assets/img/icon/add.png";
import Search from "../../assets/img/icon/search.png";
import Setting from "../../assets/img/icon/settings.png";
import LightMode from "../../assets/img/icon/light_mode.png";
import Logout from "../../assets/img/icon/logout.png";
import Person from "../../assets/img/icon/person.png";
import PersonCircle from "../../assets/img/icon/account_circle.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-container">
      <div className="sidebar-sub-container">
        <div className="sidebar-top">
          <div className="sidebar-info">
            <div className="sidebar-info_left">
              <div className="sidebar-info_left_img" />
            </div>
            <div className="sidebar-info_right">
              <div className="sidebar-info_right_name">
                <span>Duy Anh</span>
                <img src={MoreVert} alt="" onClick={() => setIsOpen(!isOpen)}/>
                <div className="sidebar-info_profile">
                  {isOpen &&
                    <ul className="list-profile">
                      <li className="profile-item">
                        <img src={PersonCircle} />
                        <p>Thay đổi ảnh đại diện</p>
                      </li>
                      <li className="profile-item">
                        <img src={Person} />
                        <p>Cài đặt tài khoản</p>
                      </li>
                      <li className="profile-item">
                        <img src={PersonCircle} />
                        <p>Cài đặt dashboard</p>
                      </li>
                    </ul>}
                </div>
              </div>
              <div className="sidebar-info_right_email">
                <a href="#">nguyenduyanh683@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="sidebar-chat-container">
            <div className="sidebar-new-chat">
              <div className="sidebar-new-chat_content">
                <img src={Add} alt="" />
                <span>Cuộc trò chuyện mới</span>
              </div>
            </div>
            <div className="sidebar-chat">
              <div className="sidebar-chat_channel">
                <p>Kênh chat</p>
              </div>
              <div className="sidebar-sub-chat">
                <p>Cuộc trò chuyện</p>
              </div>
            </div>
            <div className="sidebar-search">
              <img src={Search} alt="" />
              <input placeholder="Tìm kiếm" />
            </div>
          </div>
          <div className="sidebar-channel">
            <form action="">
              <div className="sidebar-channel_label">
                <label htmlFor="vehicle1">Kênh tổng hợp</label>
                <label htmlFor="vehicle2">BHSoft</label>
                <label htmlFor="vehicle3">TTTT</label>
                <label htmlFor="vehicle4">Văn bản pháp lý</label>
              </div>
              <div className="sidebar-channel_input">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                />
                <input
                  type="checkbox"
                  id="vehicle4"
                  name="vehicle4"
                  value="Boat"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="sidebar-bottom">
          <ul className="sidebar-bottom_list_icon">
            <li className="sidebar-bottom_item_icon">
              <img src={Setting} alt="" />
            </li>
            <li className="sidebar-bottom_item_icon">
              <img src={LightMode} alt="" />
            </li>
            <li className="sidebar-bottom_item_icon">
              <img src={Logout} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
