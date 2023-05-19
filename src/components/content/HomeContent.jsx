import "./content.css";
import Search from "../../assets/img/icon/search.png";
import LineChart from "../chart/LineChart";
import WeatherForecast from "../weatherForecast/WeatherForecast";

export default function HomeContent({ isShow }) {
  return <div className="home-content-container">
      <div className="sidebar-search home-content_search">
        <img src={Search} alt="" />
        <input placeholder="Tìm kiếm" />
      </div>
      <div className="home-content_highlight">
        <ul className="list-highlight">
          <li className="highlight-item">
            <div className="highlight-item_img" />
            <a href="#">Bộ TTTT....</a>
          </li>
          <li className="highlight-item">
            <div className="highlight-item_img" />
            <a href="#">BHSoft....</a>
          </li>
          <li className="highlight-item">
            <div className="highlight-item_img" />
            <a href="#">Nghị định ...</a>
          </li>
          <li className="highlight-item">
            <div className="highlight-item_img" />
            <a href="#">Kenh14....</a>
          </li>
          <li className="highlight-item">
            <div className="highlight-item_img" />
            <a href="#">Thông tư....</a>
          </li>
          <li className="highlight-item">
            <div className="highlight-item_img" />
            <a href="#">Nghị định ...</a>
          </li>
        </ul>
      </div>
      <div className="home-content_charts">
        <div className="line-chart-container">
          <div className="line-chart-top">
            <div className="line-chart-title">
              <p>Thống kê lượng tương tác tuần qua</p>
            </div>
          </div>
          <div className="line-chart-bottom">
            <LineChart />
          </div>
          <div className="line-chart-btn">
            <div className="line-chart-btn_content">
              <p onClick={() => isShow()}>Xem thống kê đầy đủ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-content_weather_forecast">
        <WeatherForecast />
      </div>
    </div>;
}
