import "./popup.css"

export default function Popup() {
  return <div className="popup-container">
      <div className="popup-content">
        <p>
          Hoàn thiện key OpenAI để có thể trải nghiệm GLEAN một cách tốt nhất!
        </p>
        <div className="popup-btn">
          <button className="popup-btn_cancel">Hủy</button>
          <button className="popup-btn_get_code">Lấy mã</button>
        </div>
      </div>
    </div>;
}
