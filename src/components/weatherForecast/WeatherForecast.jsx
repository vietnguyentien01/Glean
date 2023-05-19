import "./weatherForecast.css";
import Arrowdown from "../../assets/img/icon/navigate_next.png";
import Snow from "../../assets/img/icon/cloudy_snowing_2.png";
import Thunder from "../../assets/img/icon/thunderstorm.png";
import Cool from "../../assets/img/icon/cloudy.png";
import Water from "../../assets/img/icon/humidity_low.png";
import ChatBoxImg from "../../assets/img/icon/Asset 2@4x2.png";

export default function WeatherForecast() {
  return (
    <div className="weather-container">
      <div className="weather-left">
        <div className="weather-left_content">
          <div className="weather-left_content_top">
            <p>Hà Nội</p>
            <img src={Arrowdown} alt="" />
          </div>
          <div className="weather-left_content_center">
            <img src={Snow} alt="" />
            <p>30*C</p>
          </div> 
          <div className="weather-left_content_bottom">
            <ul className="list-weather-icon">
              <li className="weather-item">
                <div className="weather-item_content">
                  <p>09:00</p>
                  <img src={Snow} alt="" />
                  <p>31*C</p>
                  <div className="weather-item-icon">
                    <img src={Water} alt="" />
                    <p>0%</p>
                  </div>
                </div>
              </li>
              <li className="weather-item">
                <div className="weather-item_content">
                  <p>12:00</p>
                  <img src={Cool} alt="" />
                  <p>31*C</p>
                  <div className="weather-item-icon">
                    <img src={Water} alt="" />
                    <p>0%</p>
                  </div>
                </div>
              </li>
              <li className="weather-item">
                <div className="weather-item_content">
                  <p>16:00</p>
                  <img src={Thunder} alt="" />
                  <p>31*C</p>
                  <div className="weather-item-icon">
                    <img src={Water} alt="" />
                    <p>0%</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="weather-right">
        <img src={ChatBoxImg} alt="" />
      </div>
    </div>
  );
}
