import { useState } from "react";
import "./forgotPassword.css";
import { auth } from "../../firebaseConfig/firebase";
import Logo from "../../assets/img/logo/LogoGLEAN.png";
import ArrowDown from "../../assets/img/icon/arrow_drop_down.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export default function ForgotPasswordEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <div className="login-logo">
              <img src={Logo} />
              <h3>Khôi phục tài khoản</h3>
            </div>
            <div className="login-input_field forgot-password_field_first">
              <div className="login-email">
                <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="login-btn forgot-password_btn">
              <Link to={"/forgotPasswordCode"} className="btn-public">
                Tiếp theo
              </Link>
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
