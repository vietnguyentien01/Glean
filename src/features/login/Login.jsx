import { useState } from "react";
import "./login.css";
import { auth } from "../../firebaseConfig/firebase";
import Logo from "../../assets/img/logo/LogoGLEAN.png";
import ArrowDown from "../../assets/img/icon/arrow_drop_down.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibility, setIsVisibility] = useState(false);

  const sighIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-sub-container">
        <div className="login-content">
          <div className="login-sub-content">
            <div className="login-logo">
              <img src={Logo} />
              <h3>Đăng nhập GLEAN</h3>
            </div>
            <div className="login-input_field">
              <div className="login-email">
                <input
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="login-password">
                <input
                  placeholder="Mật khẩu"
                  type={!isVisibility ? "password" : "text"}
                  onChange={e => setPassword(e.target.value)}
                />
                <i
                  className={
                    !isVisibility ? "icon-visibility" : "icon-invisibility"
                  }
                  onClick={() => setIsVisibility(!isVisibility)}
                />
              </div>
              <div className="login-desc">
                <p>
                  Mật khẩu yêu cầu có từ 8 đến 20 ký tự, bao gồm ít nhất 1 ký tự
                  viết hoa, 1 ký tự số và 1 ký tự đặc biệt.
                </p>
              </div>
              <div className="login-forgot_password">
                <Link
                  to={"/forgotPasswordEmail"}
                  className="login-forgot_password_content"
                >
                  Quên mật khẩu?
                </Link>
              </div>
            </div>
            <div className="login-btn">
              <Link to={"/register"} className="login-btn_register">
                Đăng ký
              </Link>
              <Link to={"/home"} className="btn-public">Tiếp theo</Link>
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
    </div>
  );
}
