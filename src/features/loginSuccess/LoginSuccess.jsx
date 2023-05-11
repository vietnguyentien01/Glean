import "./loginSuccess.css";
import Logo from "../../assets/img/logo/LogoGLEAN.png";
import Swirl from "../../assets/img/icon/swirl.png";
import Close from "../../assets/img/icon/add.png";
import { useState } from "react";

export default function LoginSuccess() {
  const [isClose, setIsClose] = useState(true);
  const [save, setSave] = useState(false);

  return (
    <div className="login-success_container">
      <div className="login-success_content">
        <div className="login-success_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="login-success_title">
          <h3>Chào mừng bạn đến với GLEAN!</h3>
          <p>
            Hãy bắt đầu trò chuyện cùng GLEAN ngay lúc này nhé. Bạn có thể hỏi
            tôi bất cứ điều gì!
          </p>
          <img src={Swirl} alt="" />
        </div>
      </div>
      {isClose &&
        <div className="login-success_modal">
          <div className="login-success_sub_modal">
            <img src={Close} alt="" onClick={() => setIsClose(false)} />
            <div className="login-success_modal_content">
              <div className="login-success_modal_title">
                <span>Lưu thông tin đăng nhập?</span>
              </div>
              <div className="login-success_modal_save">
                <button onClick={() => setIsClose(false)}>Lưu</button>
                <button onClick={() => setIsClose(false)}>Không hỏi lại</button>
              </div>
            </div>
          </div>
        </div>}
    </div>
  );
}
