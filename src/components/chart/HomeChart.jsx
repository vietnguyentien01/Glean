import ArrowBack from "../../assets/img/icon/navigate_back.png";
import Calendar from "../calendar/Calendar";

export default function HomeChart({ isShow }) {
  return <div className="home-chart-container">
      <div className="home-chart_left">
        <img src={ArrowBack} onClick={() => isShow()} />
      </div>
      <div className="home-chart_right">
        <div className="home-chart_right_title">
          <h3>Thống kê hoạt động</h3>
        </div>
        <div className="home-chart-line_right">
          <div className="home-chart-line_right_top">
            <p>Thời gian sử dụng ứng dụng</p>
            <div className="home-chart-line_right_calendar">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>;
}
