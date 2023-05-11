import { useState } from "react";
import "./forgotPassword.css";
import { auth } from "../../firebaseConfig/firebase";
import Logo from "../../assets/img/logo/LogoGLEAN.png";
import ArrowDown from "../../assets/img/icon/arrow_drop_down.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export default function ForgotPasswordConfirm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);

  const sighIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return <div className="login-container">
      <div className="login-sub-container">
        <div className="login-content">
          <div className="login-sub-content">
            <div className="login-logo forgot-password_logo_second">
              <img src={Logo} />
              <h3>Khôi phục tài khoản</h3>
              <p>
                Cập nhật mật khẩu mới để tài khoản của bạn được an toàn hơn!
              </p>
            </div>
            <div className="login-input_field forgot-password_field_third">
              <div className="login-password forgot-password_confirm_password">
                <input placeholder="Nhập mật khẩu  mới" type={!isShow ? "password" : "text"} onChange={e => setPassword(e.target.value)} />
                <i className={!isShow ? "icon-visibility" : "icon-invisibility"} onClick={() => setIsShow(!isShow)} />
              </div>
              <div className="login-password forgot-password_confirm_password">
                <input placeholder="Xác nhận mật khẩu mới" type={!isVisibility ? "password" : "text"} onChange={e => setPassword(e.target.value)} />
                <i className={!isVisibility ? "icon-visibility" : "icon-invisibility"} onClick={() => setIsVisibility(!isVisibility)} />
              </div>
              <div className="login-desc">
                <p>
                  Mật khẩu yêu cầu có từ 8 đến 20 ký tự, bao gồm ít nhất 1 ký
                  tự viết hoa, 1 ký tự số và 1 ký tự đặc biệt.
                </p>
              </div>
            </div>
            <div className="login-btn forgot-password_btn">
              <Link to={"/"} className="btn-public">Tiếp theo</Link>
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
    </div>;
}
