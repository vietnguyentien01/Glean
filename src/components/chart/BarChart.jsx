import "./chart.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Arrowdown from "../../assets/img/icon/arrow_down_ios.png";

export default function BarChart() {
  const dataString = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="bar-chart-container">
      <div className="bar-chart-top">
        <div className="bar-chart-title">
          <p>Tần suất lặp lại các câu hỏi</p>
        </div>
        <div className="bar-chart-options">
          <a href="#">Tất cả hoạt động</a>
          <img src={Arrowdown} alt="" />
        </div>
      </div>
      <div className="bar-chart-bottom">
        <Bar
          data={{
            labels: [
              "Thứ 2",
              "Thứ 3",
              "Thứ 4",
              "Thứ 5",
              "Thứ 6",
              "Thứ 7",
              "Chủ Nhật"
            ],
            datasets: [{ data: dataString.map(data => data) }]
          }}
          options={{
            scales: {
              x: { grid: { tickBorderDashOffset: true } },
              y: { grid: { tickBorderDashOffset: true } }
            }
          }}
        />
      </div>
    </div>
  );
}
