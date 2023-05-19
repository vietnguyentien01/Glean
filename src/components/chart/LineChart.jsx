import "./chart.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function LineChart() {
  const dataString = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Line
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
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }}
    />
  );
}
