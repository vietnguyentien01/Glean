import { useState } from "react";
import "./register.css";
import { auth } from "../../firebaseConfig/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Logo from "../../assets/img/logo/LogoGLEAN.png";
import ArrowDown from "../../assets/img/icon/arrow_drop_down.png";
import ArrowBack from "../../assets/img/icon/arrow_back.png";
import Close from "../../assets/img/icon/close.png";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibility, setIsVisibility] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const sighIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, name, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return <div className="login-container">
      <div className="login-sub-container">
        <div className="login-content">
          <div className="login-sub-content">
            <div className="login-logo">
              <img src={Logo} />
              <h3>Tạo tài khoản GLEAN</h3>
            </div>
            <div className="login-input_field">
              <div className="register-name">
                <input placeholder="Họ và tên" onChange={e => setName(e.target.value)} />
              </div>
              <div className="login-email">
                <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="login-password">
                <input placeholder="Mật khẩu" type={!isVisibility ? "password" : "text"} onChange={e => setPassword(e.target.value)} />
                <i className={!isVisibility ? "icon-visibility" : "icon-invisibility"} onClick={() => setIsVisibility(!isVisibility)} />
              </div>
              <div className="login-desc">
                <p>
                  Mật khẩu yêu cầu có từ 8 đến 20 ký tự, bao gồm ít nhất 1 ký
                  tự viết hoa, 1 ký tự số và 1 ký tự đặc biệt.
                </p>
              </div>
              <div className="register-accept">
                <input type="checkbox" className="register-checkbox" />
                <p>
                  Tôi đồng ý với <span className="register-accept_highlight">
                    Chính sách quyền riêng tư
                  </span> và <span className="register-accept_highlight">
                    Điều khoản sử dụng ứng dụng và dịch vụ
                  </span>
                </p>
              </div>
            </div>
            <div className="login-btn">
              <Link to={"/"} className="login-btn_register">
                Đăng nhập
              </Link>
              <button className="btn-public" onClick={() => setIsClose(!isClose)}>
                Tiếp theo
              </button>
            </div>
          </div>
        </div>
        <div className="login-language">
          <select name="language" id="language">
            <option value="Tiếng Việt">Tiếng Việt</option>
            <option value="Tiếng Anh">Tiếng Anh</option>
          </select>
          <img src={ArrowDown} />
        </div>
      </div>
      {isClose && <div className="register-layer">
          <div className="register-layer_content">
            <div className="register-layer_back">
              <img src={ArrowBack} alt="" onClick={() => setIsClose(!isClose)} />
            </div>
            <div className="register-layer_modal">
              <div className="register-layer_modal_content">
                <div className="register-close">
                  <img src={Close} onClick={() => setIsClose(!isClose)} />
                </div>
                <div className="register-logo">
                  <img src={Logo} />
                  <p>
                    Vui lòng xác thực tài khoản của bạn <br /> qua email đã đăng ký để hoàn tất.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}
